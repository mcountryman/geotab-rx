/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../../../../geotab/checkmate/object_model/i_name_entity';
import { IDiagnostic } from '../../../../geotab/checkmate/object_model/engine/i_diagnostic';
import { IFailureMode } from '../../../../geotab/checkmate/object_model/engine/i_failure_mode';



/**  The optional summary code references for specific items referencing records. */
export interface IFlashCode extends INameEntity
{
  /** Gets or sets the circuit index reference to the flash code. */
  circuitIndex: string;
  /** Gets or sets the associated to the flash code. */
  diagnostic: IDiagnostic;
  /** Gets or sets the associated to the flash code. */
  failureMode: IFailureMode;
  /** Gets or sets the flash code index. */
  flashCodeIndex: string;
  /**
  * Gets or sets an optional URL which points to the associated documentation for the
  * flash code.
  */
  helpUrl: string;
  /** Gets or sets the unique identifier for this entity. See . */
  id: string;
  /**
  * Gets or sets the name of this entity that both uniquely identifies it and is used
  * for display.
  */
  name: string;
  /** Gets or sets the page reference, if applicable. */
  pageReference: string;
  /** Gets or sets the priority level of the fault flash code. */
  priorityLevel?: number;
}
