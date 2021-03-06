/* eslint-disable @typescript-eslint/no-empty-interface */

/** Represents a severity/class code from the engine system of the specific {@link IDevice}. */
export enum DtcClass {
  /** DTCClass 0 is unclassified. */
  Unclassified = "Unclassified",
  /** DTCClass 1 matches the GTR module B Class A definition. */
  A = "A",
  /** DTCClass 2 matches the GTR module B Class B1 definition. */
  B1 = "B1",
  /** DTCClass 3 matches the GTR module B Class B2 definition. */
  B2 = "B2",
  /** DTCClass 4 matches the GTR module B Class C Definition. */
  C = "C",
}
