/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * Confidence of the fuel event data, derived from how many data points successfully
 * matched to calculate a {@link IFuelUpEvent}.
 */
export enum FuelUpEventConfidences {
  /** None */
  None = 'None',
  /** Fuel level based {@link IFuelUpEvent} */
  FuelLevel = 'FuelLevel',
  /** The {@link IFuelUpEvent} that matched on trip stop date. */
  TripStop = 'TripStop',
  /** The based {@link IFuelUpEvent} */
  FuelTransaction = 'FuelTransaction',
  /**  based {@link IFuelUpEvent} that has a matched device */
  DeviceMatchedFuelTransaction = 'DeviceMatchedFuelTransaction',
  /**  based {@link IFuelUpEvent} that has matched trip stop by location */
  LocationMatchedFuelTransaction = 'LocationMatchedFuelTransaction',
  /**  based {@link IFuelUpEvent} that has matched trip stop by date */
  TripStopFuelTransaction = 'TripStopFuelTransaction',
  /**
   * Fuel level based {@link IFuelTransaction} based {@link IFuelUpEvent} by datetime
   * and device
   */
  DeviceFuelLevelMatchedFuelTransaction = 'DeviceFuelLevelMatchedFuelTransaction',
  /**
   * Fuel level based {@link IFuelTransaction} based {@link IFuelUpEvent} where locations
   * match
   */
  LocationFuelLevelMatchedFuelTransaction = 'LocationFuelLevelMatchedFuelTransaction',
  /** The {@link IDevice} was not communicating at the time of transaction */
  NotCommunicating = 'NotCommunicating',
  /**
   * Fuel level based {@link IFuelUpEvent} could not be determined as there is not enough
   * data
   */
  FuelLevelIndeterminate = 'FuelLevelIndeterminate',
  /**  based {@link IFuelUpEvent} that has a matched driver */
  DriverMatchedFuelTransaction = 'DriverMatchedFuelTransaction',
  /** Fuel used inconsistent */
  FuelUsedInconsistent = 'FuelUsedInconsistent',
  /** The {@link IDevice} is reporting electric energy usage. */
  EngineElectricEnergy = 'EngineElectricEnergy',
}
