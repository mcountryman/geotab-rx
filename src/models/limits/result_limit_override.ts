/* eslint-disable @typescript-eslint/no-empty-interface */

/** An override of the default result limit. */
export interface IResultLimitOverride {
  /**
   * Gets or sets a value indicating whether the limit is a temporary max returnable
   * limit.
   */
  isMaxPayloadLimit: boolean;
  /** Gets or sets the limit which will override the default. */
  limit: number;
  /** Gets or sets the type which should have the override applied. */
  type: any;
  /** Gets or sets the full name of the Type which should have the override applied. */
  typeName: string;
}
