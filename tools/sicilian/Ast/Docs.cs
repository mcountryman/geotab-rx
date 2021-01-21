namespace Sicilian.Ast {
  public class Docs {
    public string? Summary { get; set; }

    public override string ToString() {
      return @$"
          Summary: {Summary}
      ";
    }
  }
}