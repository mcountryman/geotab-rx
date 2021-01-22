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

namespace Sicilian {
  class Program {
    static async Task Main(string[] args) {
      await Download(CancellationToken.None);
      // var assembly = Assembly.Load("Geotab.Checkmate.ObjectModel");
      // var parser = new Parser();
      // var roots = await parser.Parse(
      //   assembly,
      //   type => type.Namespace.StartsWith("Geotab.Checkmate.ObjectModel")
      // );

      // var i = 0;
      // foreach (var root in roots) {
      //   Console.WriteLine(root);

      //   i++;
      //   if (i > 5)
      //     break;
      // }
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
        packageReader.ExtractFile(
          file,
          Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location),
          logger
        );
    }
  }
}
