/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from './name_entity';
import { ReportDataSource } from './report_data_source';
import { ISigningInfo } from './signing_info';
import { ReportTemplateType } from './report_template_type';

/** ReportTemplate class represents a template for reports that is an Excel file. */
export interface IReportTemplate extends INameEntity {
  /** Gets or sets the Excel binary data. */
  binaryData: number[];
  /** Gets or sets whether the ReportTemplate is System. */
  isSystem?: boolean;
  /** Gets or sets the {@link IReportDataSource}. */
  reportDataSource?: ReportDataSource;
  /** Gets or sets the {@link IReportTemplateType}. */
  reportTemplateType?: ReportTemplateType;
  /** Gets or sets whether the ReportTemplate is shown in the report dropdowns. */
  showReport?: boolean;
  /** Gets or sets the . */
  signingInfo: ISigningInfo;
}
