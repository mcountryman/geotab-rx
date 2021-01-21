namespace Sicilian.Ast {
  public interface IIntrinsic : IType { }

  public struct Any : IIntrinsic {
    public string Name => "any";
  }

  public struct Date : IIntrinsic {
    public string Name => "Date";
  }

  public struct Number : IIntrinsic {
    public string Name => "number";
  }

  /// <summary>
  /// Really, super, duper, clever alias for String
  /// </summary>
  public struct Stringe : IIntrinsic {
    public string Name => "string";
  }


  /// <summary>
  /// Really, super, duper, clever alias for Array
  /// </summary>
  public struct Ayray : IIntrinsic {
    public string Name => Inner.Name + "[]";
    public IType Inner { get; set; }
    public bool RequiresImport => Inner.RequiresImport;

    public Ayray(IType inner) {
      Inner = inner;
    }
  }
}