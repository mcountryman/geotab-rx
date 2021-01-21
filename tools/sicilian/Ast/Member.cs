using System;

namespace Sicilian.Ast {
  public struct Member {
    public string Name { get; set; }
    public Docs? Docs { get; set; }
    public Lazy<IType?> Type { get; set; }

    public override string ToString() {
      return $"{Name}: {Type.Value?.Name}";
    }
  }
}