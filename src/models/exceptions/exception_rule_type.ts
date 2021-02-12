/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * This enumerated type allows designating rules to be of a certain type to assist
 * with differentiating them from one another.
 */
export enum ExceptionRuleType {
  /** Normal Exception Rule. */
  Normal = 'Normal',
  /** Exception rule. */
  System = 'System',
  /** Customer Zone Stop ExceptionRule. */
  Zone = 'Zone',
  /** Application Exception. */
  ApplicationException = 'ApplicationException',
  /** No Type (for generic use). */
  None = 'None',
}
