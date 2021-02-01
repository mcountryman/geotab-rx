/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 *  Internal object for languages for lookup.
 *
 * @deprecated
 */
export interface ILanguageDictionary {
  /** Gets or sets the language of the sentence. */
  language: string;
  /** Gets or sets a dictionary of sentences as key and translated sentences as values. */
  sentenceDictionary: { [key: string]: string };
}
