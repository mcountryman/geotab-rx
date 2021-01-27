/* eslint-disable @typescript-eslint/no-empty-interface */


/**
* The Custom Data Section enumeration. Custom data can be made up of three separate
* messages. This enumeration is used internally to identify which part(s) of the {@link
* ICustomData} is being used.
*/
export enum CustomDataSections { 
  /** No value provided */
  None = "None", 
  /** Section A */
  A = "A", 
  /** Section B */
  B = "B", 
  /** Section C */
  C = "C", 
  /** The header */
  Header = "Header", 
  /** All the sections */
  All = "All"
}
