/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../name_entity';
import { IDataDiagnostic } from '../engine/data_diagnostic';

/** An obsolete, unused class. */
export interface IDiagnosticSignal extends INameEntity {
  /** Gets or sets gets the code. */
  code: number;
  /** Gets or sets get the data diagnostic. */
  dataDiagnostic: IDataDiagnostic;
}
