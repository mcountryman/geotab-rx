
namespace Sicilian.Ast {
  public interface IType {
    bool RequiresImport { get { return false; } }
  }

  public interface IImportableType : IType {
    new bool RequiresImport { get { return false; } }
  }
}
