/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDiagnostic } from '../../../../geotab/checkmate/object_model/engine/i_diagnostic';



/** A diagnostic for Geotab Devices that represents DBNull database value. */
export interface INoDiagnostic extends IDiagnostic
{
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id?: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name?: string;
}
