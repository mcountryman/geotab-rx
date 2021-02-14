/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataDiagnostic } from "../engine/data_diagnostic";
import { IEngineType } from "../engine/engine_type";

/** A diagnostic that originates from a Go Device. */
export interface IGoDiagnostic extends IDataDiagnostic {
  /**
   * @inheritdoc
   */
  engineType?: IEngineType;
}
