/* eslint-disable @typescript-eslint/no-empty-interface */
import { IParameterGroup } from '../engine/parameter_group';

/** A parameter group to use where there is no parameter group. */
export interface IParameterGroupNone extends IParameterGroup {
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
}
