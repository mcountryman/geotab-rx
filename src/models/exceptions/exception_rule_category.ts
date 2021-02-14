/* eslint-disable @typescript-eslint/no-empty-interface */

/** Specific categories to which the exception rules belong. */
export enum ExceptionRuleCategory {
  /** An Application Exception Rule. */
  ApplicationExceptionRule = "ApplicationExceptionRule",
  /**
   * A user management Exception Rule that includes either engine and non-engine rules
   * or combination of them.
   */
  UserExceptionRules = "UserExceptionRules",
  /** An Exception Rule associated with a Customer Zone. */
  ZoneStopExceptionRules = "ZoneStopExceptionRules",
}
