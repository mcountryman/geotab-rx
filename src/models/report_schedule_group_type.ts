/* eslint-disable @typescript-eslint/no-empty-interface */

/** The way to treat nodes in report schedule. */
export enum ReportScheduleGroupType {
  /** Data scope only */
  DataScope = "DataScope",
  /** Include all children */
  IncludeAllChildren = "IncludeAllChildren",
  /** Only direct children */
  IncludeDirectChildrenOnly = "IncludeDirectChildrenOnly",
}
