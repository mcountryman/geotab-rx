/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { IAddressLookupData } from "./address_lookup_data";
import { DeviceStatusLevel } from "./device_status_level";
import { IDevice } from "./device";

/**
 * A class that represents the current status for a {@link IDevice}, including last
 * known {@link ITrip}, last known {@link IStatusData} and / or {@link IFaultData}
 * data, and last known {@link IRadioData} entry, where applicable.
 */
export interface IDeviceStatus extends IEntity {
  /**
   * Gets or sets The last {@link ILogRecord} location (see {@link IAddressLookupData}
   * for more info).
   *
   * @deprecated
   */
  addressLookupData: IAddressLookupData;
  /** Gets returns the number of days since the last engine {@link IStatusData} was received. */
  daysSinceLastEngineData: number;
  /** Gets returns the number of days since the last engine {@link IFaultData} was received. */
  daysSinceLastFaultData: number;
  /** Gets returns the number of days since the last radio communications. */
  daysSinceLastRadioComms: number;
  /** Gets returns the number of days since the last {@link ITrip}. */
  daysSinceLastTrip: number;
  /** Gets or sets gets the {@link IDevice}. */
  device: IDevice;
  /** Gets or sets the last {@link ICustomData} date for the {@link IDevice} in the system. */
  lastCustomData?: Date;
  /** Gets or sets the last {@link IDebugData} date for the {@link IDevice} in the system. */
  lastDebugData?: Date;
  /** Gets or sets the last {@link IStatusData} date for the {@link IDevice} in the system. */
  lastEngineData?: Date;
  /** Gets or sets the last {@link IFaultData} date for the {@link IDevice} in the system. */
  lastFaultData?: Date;
  /** Gets or sets the last {@link ILogRecord} received from the {@link IDevice}. */
  lastGpsRecord?: Date;
  /** Gets last known record of any sort received from this {@link IDevice}. */
  lastHeartBeat?: Date;
  /**
   * Gets or sets the last {@link IDriverChange} date for the {@link IDevice} in the
   * system.
   */
  lastKeyInsertData?: Date;
  /** Gets or sets the last {@link IRadioData} date for the {@link IDevice} in the system. */
  lastRadioData?: Date;
  /** Gets or sets the last download of aided GPS data for the {@link IDevice}. */
  lastRFAidedGpsUpload?: Date;
  /** Gets or sets the last download of firmware for the {@link IDevice}. */
  lastRFFirmwareUpload?: Date;
  /** Gets or sets the last download of parameters for the {@link IDevice}. */
  lastRFParameterUpload?: Date;
  /** Gets or sets the last upload for standard GPS data for the {@link IDevice}. */
  lastRFTripDataUpload?: Date;
  /** Gets or sets the last {@link ITrip} date for the {@link IDevice}. */
  lastTrip?: Date;
  /** Gets or sets the last general vehicle light. */
  lastVehicleLight?: Date;
  /** Gets the status level. */
  statusLevel: DeviceStatusLevel;
  /** Gets or sets the total possible tamper signs for the {@link IDevice}. */
  tamperSigns: number;
}
