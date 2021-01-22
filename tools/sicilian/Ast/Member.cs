using System;
using CaseExtensions;

namespace Sicilian.Ast {
  public struct Member {
    public string Name { get; set; }
    public Docs? Docs { get; set; }
    public Lazy<IType?> Type { get; set; }

    public override string ToString() {
      var name = Name.ToCamelCase();
      var type = Type.Value;

      if (type is Knullable nullable) {
        return Docs + name + "?: " + type.Name;
      }

      return Docs + name + ": " + type?.Name; ;
    }
  }
}