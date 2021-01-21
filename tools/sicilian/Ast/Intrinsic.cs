namespace Sicilian.Ast {
  public interface IIntrinsic : IType { }

  public struct Any : IIntrinsic { }
  public struct Date : IIntrinsic { }
  public struct Number : IIntrinsic { }
  public struct String : IIntrinsic { }

  public struct Array : IIntrinsic {
    public IType Inner { get; set; }
    public bool RequiresImport => Inner.RequiresImport;

    public Array(IType inner) {
      Inner = inner;
    }

    public override string ToString() {
      return $"{Inner.ToString()}[]";
    }
  }
}