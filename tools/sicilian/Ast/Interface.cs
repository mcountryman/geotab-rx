
using System;
using System.Collections.Generic;
using System.Linq;

namespace Sicilian.Ast {
  public class Interface : IRoot, IType, IImportableType {
    public string Name { get; set; }
    public Docs? Docs { get; set; }
    public IList<Member> Members { get; set; } = new List<Member>();
    public Lazy<Interface>? Parent { get; set; }

    public override string ToString() {
      return @$"
        Name: {Name}
        Docs: {Docs}
        Members: 
            {string.Join("\n            ", Members.Select(member => member.ToString()))}
        Parent: {Parent?.Value}
      ";
    }
  }
}
