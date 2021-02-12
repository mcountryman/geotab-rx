/* eslint-disable @typescript-eslint/no-empty-interface */

/** The mode of the {@link IRule}. */
export enum ExceptionRuleMode {
  /** Checked inside a zone. */
  Inside = 'Inside',
  /** Checked outside a zone. */
  Outside = 'Outside',
  /** Check for stop inside a zone. */
  StopInside = 'StopInside',
  /** Check for stop outside a zone. */
  StopOutside = 'StopOutside',
  /** Entering a zone. */
  EnteringZone = 'EnteringZone',
  /** Exiting a zone. */
  ExitingZone = 'ExitingZone',
}
