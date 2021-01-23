using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using Geotab.Checkmate.ObjectModel;
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

namespace Sicilian {
  class Program {
    static readonly string ExecutablePath =
      Path.GetDirectoryName(Assembly.GetExecutingAssembly()?.Location) ??
      throw new Exception("Failed to locate executing assembly");
    static readonly string TargetPath =
      Path.Combine(
        ExecutablePath,
        "../../../../../packages/mygeotab/src"
      );

    static async Task Main(string[] args) {
      await Download(CancellationToken.None);

      var assemblyLocation = Path.Combine(ExecutablePath, "Geotab.Checkmate.ObjectModel.dll");
      var assembly = Assembly.LoadFile(assemblyLocation);

      var operations = new FilesOperations();
      var context = new ExportContext(new[] { assembly }, operations) {
        TargetFile = TargetPath + "/index.ts",
        Hierarchical = false,
        TargetDirectory = TargetPath,
        ConfigurationMethod = Configure,
      };

      var exporter = new TsExporter(context);

      exporter.Export();
    }

    public static void Configure(ConfigurationBuilder builder) {

      var assemblyLocation = Path.Combine(ExecutablePath, "Geotab.Checkmate.ObjectModel.dll");
      var assembly = Assembly.LoadFile(assemblyLocation);

      builder
        .Global(config => config
          .TabSymbol("  ")
          .UseModules()
          .ReorderMembers()
          .GenerateDocumentation()
          .CamelCaseForProperties()
          .AutoOptionalProperties()
        );

      builder.TryLookupDocumentationForAssembly(assembly);

      builder.ExportAsEnums(
        assembly.ExportedTypes.Where(x => x.Namespace.StartsWith("Geotab.Checkmate.ObjectModel") && x.IsEnum),
        config => config
          .UseString()
          .WithCodeGenerator<CustomEnumGenerator>()
      );

      builder.ExportAsInterfaces(
        assembly.ExportedTypes.Where(x => x.Namespace.StartsWith("Geotab.Checkmate.ObjectModel") && x.IsClass),
        config => config
          .WithCodeGenerator<CustomInterfaceGenerator>()
          .WithPublicProperties()
          .Substitute(typeof(Id), new RtSimpleTypeName("string"))
          .Substitute(typeof(TimeSpan), new RtSimpleTypeName("Date"))
          .Substitute(typeof(DateTime), new RtSimpleTypeName("Date"))
      );
    }

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
      foreach (var file in await packageReader.GetFilesAsync(cancellationToken))
        if (Path.GetFileName(file).StartsWith("Geotab.Checkmate.ObjectModel"))
          packageReader.ExtractFile(
            file,
            Path.Combine(ExecutablePath, Path.GetFileName(file)),
            logger
          );
    }
  }

  class CustomInterfaceGenerator : InterfaceCodeGenerator {
    public override RtInterface GenerateNode(
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

      return r;
    }
  }

  class CustomEnumGenerator : EnumGenerator {
    public override RtEnum GenerateNode(
      Type element,
      RtEnum result,
      TypeResolver resolver
    ) {
      var r = base.GenerateNode(element, result, resolver);
      if (r == null)
        return null;

      r.FixDoc();
      r.Values.ForEach(value => value.Documentation?.FixDoc());

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
