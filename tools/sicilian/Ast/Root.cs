using CaseExtensions;

namespace Sicilian.Ast {
  public interface IRoot : IType {
    string FileName { get => Name.ToSnakeCase() + ".ts"; }
    string ModuleName { get => "./" + Name.ToSnakeCase(); }
  }
}