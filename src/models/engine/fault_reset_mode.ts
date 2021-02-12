/* eslint-disable @typescript-eslint/no-empty-interface */

/** Specify whether the fault resets automatically or manually. */
export enum FaultResetMode {
  /**
   * The engine {@link IFaultData} instances. These instances will continue to grow until
   * the fault condition ends.
   */
  None = 'None',
  /** The engine {@link IFaultData} instance. */
  AutoReset = 'AutoReset',
}
