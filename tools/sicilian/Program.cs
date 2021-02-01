using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using NuGet.Common;
using NuGet.Packaging;
using NuGet.Protocol;
using NuGet.Protocol.Core.Types;
using Reinforced.Typings;
using Reinforced.Typings.Ast;
using Reinforced.Typings.Ast.TypeNames;
using Reinforced.Typings.Fluent;
using Reinforced.Typings.Generators;
using System.Text.RegularExpressions;
using ReverseMarkdown;
using System.Collections.Generic;
using CaseExtensions;
using Reinforced.Typings.ReferencesInspection;
using Reinforced.Typings.Ast.Dependency;

namespace Sicilian {
  class Program {
    /// <summary>Path to directory containing calling executable</summary>
    static readonly string ExecutablePath =
      Path.GetDirectoryName(Assembly.GetExecutingAssembly()?.Location) ??
      throw new Exception("Failed to locate executing assembly");

    static readonly string TargetPath = Path.Combine(
      ExecutablePath,
      "../../../../../src/models"
    );

    /// <summary>Path to typescript models output</summary>
    public static readonly string TargetPathNormalized =
      Path
        .GetFullPath(new Uri(TargetPath).LocalPath)
        .TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);

    static async Task Main(string[] args) {
      // Download Geotab Nuget package to disk.
      await Download(CancellationToken.None);

      // Load assembly
      var assemblyLocation = Path.Combine(ExecutablePath, "Geotab.Checkmate.ObjectModel.dll");
      var assembly = Assembly.LoadFile(assemblyLocation);

      // Initialize export
      var operations = new CustomFileOperations();
      var context = new ExportContext(new[] { assembly }, operations) {
        TargetFile = TargetPathNormalized + "/models.ts",
        Hierarchical = true,
        TargetDirectory = TargetPathNormalized,
        ConfigurationMethod = Configure,
      };

      var exporter = new TsExporter(context);

      // Export
      exporter.Initialize();
      FixExportPaths(context);
      exporter.Export();
    }

    /// <summary>Configure typescript export</summary>
    public static void Configure(ConfigurationBuilder builder) {
      // Load Geotab assembly _again_
      var assemblyLocation = Path.Combine(ExecutablePath, "Geotab.Checkmate.ObjectModel.dll");
      var assembly = Assembly.LoadFile(assemblyLocation);

      // Set global export settings
      builder
        .Global(config => config
          .TabSymbol("  ")
          .UseModules()
          .ReorderMembers()
          .GenerateDocumentation()
          .CamelCaseForProperties()
          .AutoOptionalProperties()
          .DontWriteWarningComment()
          .WithReferencesProcessor<CustomReferenceProcessor>()
        );

      // Attempt to resolve docs.xml from disk.
      builder.TryLookupDocumentationForAssembly(assembly);

      // Configure enum export
      builder.ExportAsEnums(
        assembly.ExportedTypes.Where(x =>
          x.Namespace?.StartsWith("Geotab.Checkmate.ObjectModel") == true &&
          x.IsEnum
        ),
        config => config
          .UseString()
          .WithCodeGenerator<CustomEnumGenerator>()
      );

      // Resolve ID type so we can subsitute with string
      var idType = assembly.ExportedTypes
        .First(type => type.Name == "Id" && type.Namespace == "Geotab.Checkmate.ObjectModel");

      // Configure class -> interface export
      builder.ExportAsInterfaces(
        assembly.ExportedTypes.Where(x =>
          // Only export types in this namespace
          x.Namespace?.StartsWith("Geotab.Checkmate.ObjectModel") == true &&
          // Skip ID type
          x.Name != "Id" &&
          x.IsClass
        ),
        config => config
          .Substitute(idType, new RtSimpleTypeName("string"))
          .Substitute(typeof(TimeSpan), new RtSimpleTypeName("Date"))
          .Substitute(typeof(DateTime), new RtSimpleTypeName("Date"))
          .WithCodeGenerator<CustomInterfaceGenerator>()
          .WithPublicProperties()
      );
    }

    /// <summary>
    ///   Download nuget package progromatically and save to disk to avoid issues resolving
    ///   docs.xml file for Geotab later.  We do this because .NET5 loads assembly from 
    /// <summary>
    static async Task Download(CancellationToken cancellationToken) {
      var repo = Repository.Factory.GetCoreV3("https://api.nuget.org/v3/index.json");
      var cache = new SourceCacheContext();
      var logger = NullLogger.Instance;

      var resource = await repo.GetResourceAsync<FindPackageByIdResource>();
      var versions = await resource.GetAllVersionsAsync(
        "Geotab.Checkmate.ObjectModel",
        cache,
        logger,
        cancellationToken
      );

      using var packageStream = new MemoryStream();
      var packageVersion = versions.Max();
      var package = await resource.CopyNupkgToStreamAsync(
        "Geotab.Checkmate.ObjectModel",
        packageVersion,
        packageStream,
        cache,
        logger,
        cancellationToken
      );

      using var packageReader = new PackageArchiveReader(packageStream);
      foreach (var file in await packageReader.GetFilesAsync(cancellationToken)) {
        if (Path.GetFileName(file).StartsWith("Geotab.Checkmate.ObjectModel")) {
          packageReader.ExtractFile(
            file,
            Path.Combine(ExecutablePath, Path.GetFileName(file)),
            logger
          );
        }
      }
    }

    static void FixExportPaths(ExportContext context) {
      var contextType = context.GetType();
      var mapProperty = contextType.GetProperty("TypesToFilesMap", BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance);
      var map = mapProperty.GetValue(context) as IDictionary<string, IEnumerable<Type>>;

      foreach (var mapped in map.Keys.ToArray()) {
        var local = mapped.Substring(TargetPathNormalized.Length);
        var updated = local;

        updated = updated.Replace("Geotab/Checkmate/ObjectModel", "");
        updated = TargetPathNormalized + FixPath(updated);

        map[updated] = map[mapped];
        map.Remove(mapped);
      }
    }

    public static string FixPath(string path) {
      path = path.Replace("\\", "/");
      path = path.Replace("Geotab/Checkmate/ObjectModel/", "");
      path = Regex.Replace(path, @"I?([a-zA-Z_]+(?:\.ts)?)$", "$1");
      path = string.Join(Path.DirectorySeparatorChar,
        path
          .Split("/")
          .Select(part => part.ToSnakeCase())
      );

      return path;
    }
  }

  class CustomFileOperations : FilesOperations {
    protected override void ExportCore(StreamWriter tw, ExportedFile file) {
      // Disable lint rule for empty interfaces
      tw.WriteLine("/* eslint-disable @typescript-eslint/no-empty-interface */");

      base.ExportCore(tw, file);
    }
  }

  class CustomReferenceProcessor : ReferenceProcessorBase {
    public override IEnumerable<RtImport> FilterImports(IEnumerable<RtImport> imports, ExportedFile file) {
      return imports.Select((import) => {
        var source = Path.GetDirectoryName(file.FileName);
        var target = Path.GetFullPath(import.From, Program.TargetPathNormalized);

        var updated = Path
          .GetRelativePath(source, target)
          .Replace("\\", "/");

        updated = Program.FixPath(import.From);
        updated = updated.StartsWith(".")
          ? updated
          : "./" + updated;

        import.From = updated;
        return import;
      });
    }

    public override IEnumerable<RtReference> FilterReferences(IEnumerable<RtReference> references, ExportedFile file) {
      return references;
    }
  }

  class CustomInterfaceGenerator : InterfaceCodeGenerator {
    public override RtInterface? GenerateNode(
      Type element,
      RtInterface result,
      TypeResolver resolver
    ) {
      var r = base.GenerateNode(element, result, resolver);
      if (r == null)
        return null;

      r.FixDoc();
      r.Members
        .Where(member => member is RtMember)
        .Cast<RtMember>()
        .Select(member => member.FixDoc())
        .ToList();

      // Special cases where base impl field(s) nullability doesn't match child
      if (element.Name == "Device" || element.Name == "Diagnostic") {
        var baseType = r.Implementees.First();
        var baseNameWrapped = $"Partial<{baseType.TypeName}>";

        r.Implementees.RemoveAt(0);
        r.Implementees.Add(new RtSimpleTypeName(baseNameWrapped));
      }

      Context.Location.CurrentNamespace.CompilationUnits.Add(new RtRaw("\n"));

      return r;
    }
  }

  class CustomEnumGenerator : EnumGenerator {
    public override RtEnum? GenerateNode(
      Type element,
      RtEnum result,
      TypeResolver resolver
    ) {
      var r = base.GenerateNode(element, result, resolver);
      if (r == null)
        return null;

      r.FixDoc();
      r.Values.ForEach(value => value.Documentation?.FixDoc());

      Context.Location.CurrentNamespace.CompilationUnits.Add(new RtRaw("\n"));

      return r;
    }
  }

  static class RtMemberEx {
    public static RtEnum FixDoc(this RtEnum member) {
      member.Documentation.FixDoc();
      return member;
    }

    public static RtMember FixDoc(this RtMember member) {
      member.Documentation.FixDoc();
      return member;
    }

    public static ITypeMember FixDoc(this ITypeMember member) {
      member.Documentation.FixDoc();
      return member;
    }

    /// <summary>Regex hacks to best-effort convert XML documentation to jsdoc</summary>
    public static void FixDoc(this RtJsdocNode doc) {
      if (doc?.Description == null)
        return;

      // Replace links
      doc.Description = Regex.Replace(
        doc.Description,
        @"<see\s*cref=""T:.*\.([^""]+)""\s*\/>",
        "{@link I$1}"
      );

      // Replace links
      doc.Description = Regex.Replace(
        doc.Description,
        @"<see\s*cref=""T:.*\.([^""]+)""\s*\/>([^<]+)<\/see>",
        "{@link I$1 | $2}"
      );

      // Replace `<value>`
      doc.Description = Regex.Replace(
        doc.Description,
        @"<value>.+<\/value>",
        ""
      );

      // Replace `<category>`
      var categoryMatch = Regex.Match(
        doc.Description,
        @"<category>([^<]+)<\/category>"
      );

      if (categoryMatch.Success) {
        doc.Description = doc.Description.Replace(categoryMatch.Value, "");

        // Not supported.. 
        // var category = categoryMatch.Groups[1].Value;
        // doc.TagToDescription.Add(Tuple.Create(DocTag.Category, category));
      }

      // Replace `<isSupported>`
      var isSupportedMatch = Regex.Match(
        doc.Description,
        @"<isSupported>([^<]+)<\/isSupported>",
        RegexOptions.IgnoreCase
      );

      if (isSupportedMatch.Success) {
        doc.Description = doc.Description.Replace(isSupportedMatch.Value, "");

        var isSupportedValue = isSupportedMatch.Groups[1].Value;
        var isSupported = isSupportedValue.Contains("t", StringComparison.InvariantCultureIgnoreCase);
        if (!isSupported) {
          doc.TagToDescription.Add(Tuple.Create(DocTag.Deprecated, ""));
        }
      }

      // Convert XML/HTML -> markdown
      doc.Description = _converter.Convert(doc.Description);

      // Normalize whitespace
      doc.Description = WordWrapped(doc.Description, 80);
    }

    static string WordWrapped(string input, int columns) {
      var words = Regex.Replace(input, @"\s+", " ").Split(" ");

      var line = new List<string>();
      var lines = new List<string>();
      var lineLength = 0;

      foreach (var word in words) {
        line.Add(word);
        lineLength += word.Length + 1;

        if (lineLength >= columns) {
          lineLength = 0;
          lines.Add(string.Join(" ", line));
          line.Clear();
        }
      }

      if (line.Count > 0) {
        lines.Add(string.Join(" ", line));
      }

      return string.Join("\n", lines);
    }

    private static readonly Converter _converter = new Converter(new Config {
      UnknownTags = Config.UnknownTagsOption.Bypass,
    });
  }
}
