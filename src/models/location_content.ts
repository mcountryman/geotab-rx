/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITextContent } from "./text_content";
import { IDateRange } from "./date_range";

/**
 *  Message content that can send a GPS location to a device. Derived from {@link ITextContent}.
 * To reset the location on a device, a location message with latitude/longitude 0
 * can be sent to the device.
 */
export interface ILocationContent extends ITextContent {
  /** Gets or sets the address of the stop. */
  address: string;
  /** Gets or sets the {@link IId} of the route message. */
  id: number;
  /** Gets or sets the latitude of the stop. */
  latitude: number;
  /** Gets or sets the longitude of the stop. */
  longitude: number;
  /**
   * Gets or sets a collection of "DateRange"s indicating when the driver's intent was
   * to go to the provided and .
   */
  onRouteRanges: IDateRange[];
  /** Gets or sets the {@link IId} of the route message. */
  routeId: string;
}
