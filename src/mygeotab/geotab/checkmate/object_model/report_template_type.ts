/* eslint-disable @typescript-eslint/no-empty-interface */


/** Report template type for {@link IReportTemplate}. */
export enum ReportTemplateType { 
  /** Uploaded user reports */
  Custom = "Custom", 
  /** Exportable report view with simplified columns */
  Report = "Report", 
  /** Exportable report views with all columns */
  Advanced = "Advanced", 
  /** Default dashboard */
  Dashboard = "Dashboard", 
  /** Used for other preloaded templates */
  Preloaded = "Preloaded"
}
