/* eslint-disable @typescript-eslint/no-empty-interface */


/**
*  Converts fuel/electric volumes/totals/economies between to and from different units.
* Volumes/totals are always returned even if 0. Economies will return 0 if the input
* is 0 to prevent divide by 0 exceptions.
*
* @deprecated
*/
export interface IFuelAndElectricConverter
{
}
