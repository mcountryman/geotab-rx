/* eslint-disable @typescript-eslint/no-empty-interface */


/** Custom web map providers. */
export interface ICustomWebMapProvider
{
  /** Gets or sets the create layers dictionary. */
  createLayersDictionary: string;
  /** Gets or sets the create map options. */
  createMapOptions: string;
  /** Gets or sets the identifier. */
  id: string;
  /** Gets or sets the name. */
  name: string;
}
