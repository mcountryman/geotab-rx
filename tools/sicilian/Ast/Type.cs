
namespace Sicilian.Ast {
  public interface IType {
    string Name { get; }
    bool RequiresImport { get { return false; } }
  }

  public interface IImportableType : IType {
    new bool RequiresImport { get { return false; } }
  }
}
