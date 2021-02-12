/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataDiagnostic } from '../engine/data_diagnostic';
import { IParameterGroup } from '../engine/parameter_group';

/**
 *  The reference object to {@link IStatusData} and {@link IFaultData}.
 *
 * @deprecated
 */
export interface ISuspectParameter extends IDataDiagnostic {
  /** Gets or sets the parameter group. */
  parameterGroup?: IParameterGroup;
}
