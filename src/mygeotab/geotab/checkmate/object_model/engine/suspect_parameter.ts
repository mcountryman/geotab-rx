/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataDiagnostic } from '../../../../geotab/checkmate/object_model/engine/i_data_diagnostic';
import { IParameterGroup } from '../../../../geotab/checkmate/object_model/engine/i_parameter_group';



/**
*  The reference object to {@link IStatusData} and {@link IFaultData}.
*
* @deprecated
*/
export interface ISuspectParameter extends IDataDiagnostic
{
  /** Gets or sets the parameter group. */
  parameterGroup?: IParameterGroup;
}
