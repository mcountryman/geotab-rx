/* eslint-disable @typescript-eslint/no-empty-interface */


/** A geographic area defined by the top-left and bottom-right coordinates. */
export interface IBoundingBox
{
  /**
  * Gets or sets the bottom latitude. Minimum value [-90]. Maximum value [90]. Default
  * [0].
  */
  bottom: number;
  /**
  * Gets or sets the left longitude. Minimum value [-180]. Maximum value [180]. Default
  * [0].
  */
  left: number;
  /**
  * Gets or sets the right longitude. Minimum value [-180]. Maximum value [180]. Default
  * [0].
  */
  right: number;
  /**
  * Gets or sets the top latitude. Minimum value [-90]. Maximum value [90]. Default
  * [0].
  */
  top: number;
}
