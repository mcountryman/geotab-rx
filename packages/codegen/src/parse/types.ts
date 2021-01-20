
export type Type = IIntrinsic | IModel;

export interface IIntrinsic {
  type: "intrinsic";
  name: string;
  array?: boolean;
  nullable?: boolean;
}

export interface IModel extends IMember {
  type: "model";
  properties: IProperty[];

  baseType: () => Type | undefined;
  
  array?: boolean;
  nullable?: boolean;
}

export interface IMember {
  name: string;
  comment?: string;
}

export interface IProperty extends IMember {
  type() : Type | undefined;
}