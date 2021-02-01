/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDiagnostic } from "../engine/diagnostic";
import { IEngineType } from "../engine/engine_type";

/** A diagnostic for a Go Device fault. */
export interface IGoFaultDiagnostic extends IDiagnostic {
  /**
   * @inheritdoc
   */
  engineType?: IEngineType;
}
