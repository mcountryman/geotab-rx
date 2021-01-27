/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDiagnostic } from '../../../../geotab/checkmate/object_model/engine/i_diagnostic';



/**
* Information from the engine computer that can either be measurement data or fault
* code data. This inherited class only consists of a diagnostics Id.
*/
export interface IBasicDiagnostic extends IDiagnostic
{
}
