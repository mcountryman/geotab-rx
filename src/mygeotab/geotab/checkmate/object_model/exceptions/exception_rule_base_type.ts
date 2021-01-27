/* eslint-disable @typescript-eslint/no-empty-interface */


/**
* When exceptions are created based on built-in rules, the base type is always set
* to "Stock". For rules which are defined by you, the base type will be "Custom".
* The ZoneStop base type is used to designate exceptions created specifically when
* a zone is configured with the "MustIdentifyStops" property set to true.
*/
export enum ExceptionRuleBaseType { 
  /** Custom Exception rule. All user created rules are custom rules. */
  Custom = "Custom", 
  /** Route Definition base rule */
  RouteDefinition = "RouteDefinition", 
  /**
  * Stock (canned) exception rule. These are the common rules available to switch on/off
  * in MyGeotab.
  */
  Stock = "Stock", 
  /**
  * Zone stop rule. When a {@link IZone}'s MustIdentifyStops property is set to true,
  * the system creates a rule to identify when a device is stopped in the zone. These
  * rules are of type ZoneStop.
  */
  ZoneStop = "ZoneStop", 
  /** Unknown base type. */
  Unknown = "Unknown"
}
