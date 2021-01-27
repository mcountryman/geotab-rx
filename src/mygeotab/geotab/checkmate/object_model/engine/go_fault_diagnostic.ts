/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDiagnostic } from '../../../../geotab/checkmate/object_model/engine/i_diagnostic';
import { IEngineType } from '../../../../geotab/checkmate/object_model/engine/i_engine_type';



/** A diagnostic for a Go Device fault. */
export interface IGoFaultDiagnostic extends IDiagnostic
{
  /**
  * @inheritdoc
  */
  engineType?: IEngineType;
}
