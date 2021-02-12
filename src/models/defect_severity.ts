/* eslint-disable @typescript-eslint/no-empty-interface */

/**  The severity of a defect for a . */
export enum DefectSeverity {
  /** Normal defect severity */
  Normal = 'Normal',
  /** Critical defect severity (vehicle or trailer is unsafe to operate) */
  Critical = 'Critical',
  /** Severity level for Unregulated Defects (vehicle or trailer is safe to operate) */
  Unregulated = 'Unregulated',
}
