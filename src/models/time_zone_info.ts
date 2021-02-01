/* eslint-disable @typescript-eslint/no-empty-interface */

/**  Information about an Olson time zone. */
export interface ITimeZoneInfo {
  /** Gets or sets the Olson time zone identifier. */
  id: string;
  /** Gets or sets a value indicating whether the time zone supports daylight saving time. */
  isDaylightSavingTimeSupported: boolean;
  /** Gets or sets the offset of the time zone from UTC. */
  offsetFromUtc: Date;
  /**
   * Gets time zone Id's mapped from Olson time zone (key) to Windows time zone (value).
   * Note: there is not a 1:1 mapping. List generated by TRUNK/Odds/TimeZoneMapper. XML
   * file from http://unicode.org/repos/cldr/trunk/common/supplemental/windowsZones.xml.
   */
  olsonWindowsTimes: { [key: string]: string };
}