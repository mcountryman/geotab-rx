/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEmailTemplate } from "./email_template";
import { IReportTemplate } from "./report_template";

/** Email template for system. */
export interface ISystemEmailTemplate extends IEmailTemplate {
  /** Gets or sets body of email. */
  body: string;
  /** Gets or sets report template. */
  exceptionsDetailTemplate: IReportTemplate;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
  /** Gets or sets subject line of email. */
  subject: string;
}
