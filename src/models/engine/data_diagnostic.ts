/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDiagnostic } from "../engine/diagnostic";
import { IDiagnosticSignal } from "../engine/diagnostic_signal";

/**
 * A {@link IDiagnostic} that represents measurement data from the vehicle (as opposed
 * to fault codes).
 */
export interface IDataDiagnostic extends IDiagnostic {
  /**
   * Gets or sets the conversion factor for the diagnostic parameter; this is related
   * to the {@link IUnitOfMeasure}.
   */
  conversion?: number;
  /** Gets or sets the length of the diagnostic data parameter in bytes. */
  dataLength?: number;
  /**
   * Gets or sets the DiagnosticSignal reference list. This property is obsolete and
   * doesn't store or return any value except null.
   */
  diagnosticSignals?: IDiagnosticSignal[];
  /** Gets or sets the offset value of the diagnostic parameter. */
  offset?: number;
}
