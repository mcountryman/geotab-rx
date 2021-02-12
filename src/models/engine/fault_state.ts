/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * Represents a fault code state code from the engine system of the specific {@link
 * IDevice}.
 */
export enum FaultState {
  /** None, FaultState Not Indicated (). */
  None = 'None',
  /** Pending fault code. */
  Pending = 'Pending',
  /** Active fault code. */
  Active = 'Active',
}
