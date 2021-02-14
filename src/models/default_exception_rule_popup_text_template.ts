/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITextTemplate } from "./text_template";

/** Default exception rule popup text. */
export interface IDefaultExceptionRulePopupTextTemplate extends ITextTemplate {
  /**
   * Gets or sets the unique identifier for the specific object in the Geotab system.
   * See .
   */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
  /** Gets or sets the text. */
  text: string;
}
