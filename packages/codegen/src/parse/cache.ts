import { IIntrinsic, IModel, Type } from "./types";

export class Cache {
  /**
   * Get cached models
   */
  public get models(): IModel[] {
    return Array.from(this._models);
  }

  constructor() {
    const intrinsic = (name: string): IIntrinsic => ({
      type: "intrinsic",
      name,
    });

    // .NET -> Typescript numerical intrinsics
    this._nameMap.set("System.Char", intrinsic("number"));
    this._nameMap.set("System.Byte", intrinsic("number"));
    this._nameMap.set("System.SByte", intrinsic("number"));
    this._nameMap.set("System.Int16", intrinsic("number"));
    this._nameMap.set("System.Uint16", intrinsic("number"));
    this._nameMap.set("System.Int32", intrinsic("number"));
    this._nameMap.set("System.Uint32", intrinsic("number"));
    this._nameMap.set("System.Int64", intrinsic("number"));
    this._nameMap.set("System.Uint64", intrinsic("number"));
    this._nameMap.set("System.Float", intrinsic("number"));
    this._nameMap.set("System.Single", intrinsic("number"));
    this._nameMap.set("System.Double", intrinsic("number"));
    this._nameMap.set("System.Decimal", intrinsic("number"));

    // .NET -> Typescript misc intrinsics
    this._nameMap.set("System.Object", intrinsic("any"));
    this._nameMap.set("System.String", intrinsic("string"));
    this._nameMap.set("System.Boolean", intrinsic("boolean"));
    this._nameMap.set("System.TimeSpan", intrinsic("Date"));
    this._nameMap.set("System.DateTime", intrinsic("Date"));

    // GeoTab `id`
    this._nameMap.set("Geotab.Checkmate.ObjectModel.Id", intrinsic("string"));
  }

  /**
   * Cache named type and return reference
   * @param name The type name
   * @param type The type defintion
   */
  public add(name: string, type: Type): Type {
    if (type.type === "model") {
      this._models.add(type);
    }

    this._nameMap.set(name, type);
    return type;
  }

  /**
   * Resolve named type
   * @param name The type name
   */
  public get(name?: string, array = false, nullable = false): Type | undefined {
    if (!name) return;
    const type = this._nameMap.get(name);
    if (!type) return;

    return {
      ...type,
      array,
      nullable,
    };
  }

  private readonly _models = new Set<IModel>();
  private readonly _nameMap = new Map<string, Type>();
}
