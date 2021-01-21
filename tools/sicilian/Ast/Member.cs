using System;

namespace Sicilian.Ast {
  public struct Member : INode {
    public string Name { get; set; }
    public Docs? Docs { get; set; }
    public Lazy<IType?> Type { get; set; }

    public override string ToString() {
      var type = Type.Value;
      var typeName = "unknown";

      if (type is INode node) {
        typeName = node.ToString();
      }

      return $"{Name}: {Type.Value}";
    }
  }
}