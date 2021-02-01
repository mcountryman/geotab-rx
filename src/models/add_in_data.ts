/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { IGroup } from "./group";

/** A class that holds data stored by an add-in. */
export interface IAddInData extends IEntity {
  /** Gets or sets the add-in identifier. */
  addInId: string;
  /** Gets or sets the data. */
  data: string;
  /**
   * @inheritdoc
   */
  groups: IGroup[];
}
