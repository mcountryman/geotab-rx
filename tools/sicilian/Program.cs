﻿using System;
using System.Reflection;
using System.Threading.Tasks;

namespace Sicilian {
  class Program {
    static async Task Main(string[] args) {
      var assembly = Assembly.Load("Geotab.Checkmate.ObjectModel");
      var parser = new Parser();
      var roots = await parser.Parse(
        assembly, 
        type => type.Namespace.StartsWith("Geotab.Checkmate.ObjectModel")
      );

      foreach (var root in roots) {
        Console.WriteLine(root);
        break;
      }
    }
  }
}
