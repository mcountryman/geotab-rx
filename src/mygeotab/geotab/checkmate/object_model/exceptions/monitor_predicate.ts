/* eslint-disable @typescript-eslint/no-empty-interface */


/** Defines the different types of rule monitor predicates. */
export enum MonitorPredicate { 
  /** None */
  None = "None", 
  /** Captures first occurrence of monitored data. */
  Start = "Start", 
  /** Captures last occurrence of monitored data. */
  End = "End"
}
