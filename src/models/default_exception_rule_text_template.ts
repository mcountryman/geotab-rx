/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITextTemplate } from './text_template';

/** Default exception rule text. */
export interface IDefaultExceptionRuleTextTemplate extends ITextTemplate {
  /** Gets or sets the unique identifier for this entity. See . */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
  /** Gets or sets the text. */
  text: string;
}
