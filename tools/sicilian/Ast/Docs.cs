namespace Sicilian.Ast {
  public class Docs {
    public string? Summary { get; set; }

    public override string ToString() {
      if (!string.IsNullOrEmpty(Summary)) {
        return "// " + Summary;
      }

      return "";
    }
  }
}