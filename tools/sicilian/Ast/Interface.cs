
using System;
using System.Collections.Generic;
using System.Linq;
using CaseExtensions;

namespace Sicilian.Ast {
  public class Interface : IRoot, IType, IImportableType {
    public string Name { get; set; }
    public Docs? Docs { get; set; }
    public IList<Member> Members { get; set; } = new List<Member>();
    public Lazy<Interface>? Parent { get; set; }

    public override string ToString() {
      var name = Name.ToPascalCase();
      var parent = Parent?.Value.Name.ToPascalCase();

      return @$"
{Docs}export default interface {name} {{ 
  {string.Join("\n  ", Members.Select(member => member.ToString()))}
}}
      ";
    }
  }
}
