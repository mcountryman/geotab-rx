/* eslint-disable @typescript-eslint/no-empty-interface */

/** The HOS log generation options. */
export enum HosOption {
  /** HOS is disabled and generation of {@link IDutyStatusLog} is disabled. */
  OFF = 'OFF',
  /** HOS is enabled and generation of {@link IDutyStatusLog} is enabled. */
  ON = 'ON',
  /**
   * If set to AUTO, {@link IDutyStatusLog} will be automatically generated when the
   * system determines the vehicle is using HOS features.
   */
  AUTO = 'AUTO',
}
