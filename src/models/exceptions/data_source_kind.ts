/* eslint-disable @typescript-eslint/no-empty-interface */

/** Kinds of data sources fro. {@link ICondition} */
export enum DataSourceKind {
  /** None */
  None = 'None',
  /** None */
  Any = 'Any',
  /** Instance of . */
  LogRecord = 'LogRecord',
  /** Instance of . */
  FaultData = 'FaultData',
  /** Instance of . */
  StatusData = 'StatusData',
  /** Instance of . */
  NotificationDataApplicationException = 'NotificationDataApplicationException',
  /** . */
  ExceptionEvent = 'ExceptionEvent',
  /** {@link IDouble}. */
  Numeric = 'Numeric',
  /** . */
  WorkTime = 'WorkTime',
  /** . */
  DVIRDefect = 'DVIRDefect',
}
