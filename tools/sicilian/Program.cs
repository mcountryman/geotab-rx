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
using Reinforced.Typings.Fluent;

namespace Sicilian {
  class Program {
    static readonly string Target =
      Path.GetDirectoryName(Assembly.GetExecutingAssembly()?.Location) ??
      throw new Exception("Failed to locate executing assembly");

    static async Task Main(string[] args) {
      await Download(CancellationToken.None);

      var assemblyLocation = Path.Combine(Target, "Geotab.Checkmate.ObjectModel.dll");
      var assembly = Assembly.LoadFile(assemblyLocation);

      var operations = new FilesOperations();
      var context = new ExportContext(new[] { assembly }, operations) {
        TargetFile = @"C:\Users\marvinc\Development\_\geotab\packages\mygeotab\src\index.ts",
        Hierarchical = true,
        TargetDirectory = @"C:\Users\marvinc\Development\_\geotab\packages\mygeotab\src",
        ConfigurationMethod = Configure,
      };

      var exporter = new TsExporter(context);

      exporter.Export();
    }

    public static void Configure(ConfigurationBuilder builder) {
      builder.Global(config => config
        .TabSymbol("  ")
        .UseModules()
        .ReorderMembers()
        .GenerateDocumentation()
        .CamelCaseForProperties()
      );

      var assemblyLocation = Path.Combine(Target, "Geotab.Checkmate.ObjectModel.dll");
      var assembly = Assembly.LoadFile(assemblyLocation);

      builder.TryLookupDocumentationForAssembly(assembly);

      builder.ExportAsEnums(
        assembly.ExportedTypes.Where(x => x.Namespace.StartsWith("Geotab.Checkmate.ObjectModel") && x.IsEnum),
        config => config.UseString()
      );
      
      builder.ExportAsInterfaces(
        assembly.ExportedTypes.Where(x => x.Namespace.StartsWith("Geotab.Checkmate.ObjectModel") && x.IsClass), 
        config => config.WithPublicProperties()
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
            Path.Combine(Target, Path.GetFileName(file)),
            logger
          );
    }
  }
}
