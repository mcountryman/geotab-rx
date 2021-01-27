/* eslint-disable @typescript-eslint/no-empty-interface */


/** Used to specify where the destination of the scheduled report. */
export enum ReportDestination { 
  /** None destination */
  None = "None", 
  /** Email destination in Excel format */
  EmailExcel = "EmailExcel", 
  /** Dashboard destination */
  Dashboard = "Dashboard", 
  /** Normal report destination */
  NormalReport = "NormalReport", 
  /** Email destination in pdf format */
  EmailPdf = "EmailPdf", 
  /** Email destination in interactive dashboard format */
  InteractiveDashboard = "InteractiveDashboard"
}
