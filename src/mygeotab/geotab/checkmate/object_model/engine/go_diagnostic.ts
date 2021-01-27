/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataDiagnostic } from '../../../../geotab/checkmate/object_model/engine/i_data_diagnostic';
import { IEngineType } from '../../../../geotab/checkmate/object_model/engine/i_engine_type';



/** A diagnostic that originates from a Go Device. */
export interface IGoDiagnostic extends IDataDiagnostic
{
  /**
  * @inheritdoc
  */
  engineType?: IEngineType;
}
