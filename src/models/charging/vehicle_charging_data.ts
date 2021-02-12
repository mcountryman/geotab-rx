/* eslint-disable @typescript-eslint/no-empty-interface */
import { IStatusData } from '../engine/status_data';
import { ITrip } from '../trip';

/** Contains the vehicle's status data pertaining to charging */
export interface IVehicleChargingData {
  /** Gets or sets alternating current voltage data. */
  acVoltageData: IStatusData[];
  /** Gets or sets the power going into the battery in the form of DC (W). */
  batteryPowerInChargingData: IStatusData[];
  /** Gets or sets the total energy going into the battery while driving. */
  batteryTotalDrivingEnergyInData: IStatusData[];
  /** Gets or sets the total energy coming out of the battery while driving. */
  batteryTotalDrivingEnergyOutData: IStatusData[];
  /** Gets or sets the fuel consumption data for a vehicle. */
  fuelConsumptionData: IStatusData[];
  /** Gets or sets on board charger power data from an AC charger. */
  onBoardChargerPowerACInData: IStatusData[];
  /** Gets or sets power coming out of the on-board charger in the form of DC (W). */
  onBoardChargerPowerDCOutData: IStatusData[];
  /** Gets or sets state of charge (SOC) data. */
  socData: IStatusData[];
  /** Gets or sets the energy going into the battery from the on-board charger (kWh). */
  totalLifetimeBatteryEnergyInACChargingData: IStatusData[];
  /** Gets or sets the energy going into the battery from a DC fast charger (kWh). */
  totalLifetimeBatteryEnergyInDCChargingData: IStatusData[];
  /** Gets or sets total lifetime on board charger energy in data during ac charging. */
  totalLifetimeOnBoardChargerEnergyACInData: IStatusData[];
  /**
   * Gets or sets the total energy coming out of the on-board charger in the form of
   * DC (kWh)
   */
  totalLifetimeOnBoardChargerEnergyDCInData: IStatusData[];
  /** Gets or sets the trips. This is used to calculate distance data. */
  tripsData: ITrip[];
}
