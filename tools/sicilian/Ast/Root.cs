using CaseExtensions;

namespace Sicilian.Ast {
  public interface IRoot : INode, IType {
    string FileName { get => Name.ToSnakeCase() + ".ts"; }
    string ModuleName { get => "./" + Name.ToSnakeCase(); }
  }
}