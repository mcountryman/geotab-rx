/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from './entity_with_version';
import { IAnnotationLog } from './annotation_log';
import { IUser } from './user';
import { IAddressLookupData } from './address_lookup_data';
import { DutyStatusLogType } from './duty_status_log_type';
import { DutyStatusOrigin } from './duty_status_origin';
import { IDevice } from './device';
import { DutyStatusState } from './duty_status_state';
import { DutyStatusMalfunctionTypes } from './duty_status_malfunction_types';
import { DutyStatusDeferralType } from './duty_status_deferral_type';

/**
 *  A DutyStatusLog is a record of duty status for Hours of Service regulations. The
 * log is first required to have a driver, dateTime, status, and device. Location is
 * not required and will be calculated from the device's data.
 */
export interface IDutyStatusLog extends IEntityWithVersion {
  /**
   * Gets or sets the list of {@link IAnnotationLog}(s) which are associated with this
   * log.
   */
  annotations: IAnnotationLog[];
  /** Gets or sets the list of the co-driver {@link IUser}(s) for this log. */
  coDrivers: IUser[];
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets the deferral minutes. */
  deferralMinutes?: number;
  /** Gets or sets the deferral status. */
  deferralStatus?: DutyStatusDeferralType;
  /** Gets or sets the {@link IDevice} associated with this log. */
  device: IDevice;
  /** Gets or sets the distance since last valid coordinate measurement. */
  distanceSinceValidCoordinates?: number;
  /** Gets or sets the {@link IUser} who created this log. */
  driver: IUser;
  /**
   * Gets or sets the date and time the log was edited. If the log has not been edited,
   * this will not be set.
   */
  editDateTime?: Date;
  /** Gets or sets the {@link IUser} that requested an edit to this log. */
  editRequestedByUser: IUser;
  /** Gets or sets the engine hours for the at the of this log. */
  engineHours?: number;
  /** Gets or sets the event checksum of this log. */
  eventCheckSum?: number;
  /** Gets or sets the event code of this log (Table 6; 7.20 of the ELD Final Rule). */
  eventCode?: number;
  /**
   * Gets the record status number of this log 1 = active 2 = inactive - changed 3 =
   * inactive - change requested 4 = inactive - change rejected.
   */
  eventRecordStatus?: number;
  /**
   * Gets or sets the event type number of this log 1 = A change in driver's duty-status
   * 2 = An intermediate log 3 = A change in driver's indication of authorized personal
   * use of CMV or yard moves 4 = A driver's certification/re-certification of records
   * 5 = A driver's login/logout activity 6 = CMV's engine power up / shut down activity
   * 7 = A malfunction or data diagnostic detection occurrence (Table 6; 7.25 of the
   * ELD Final Rule).
   */
  eventType?: number;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
   * Gets or sets if the log is ignored. True means it will not affect the Driver's HOS
   * availability.
   */
  isIgnored?: boolean;
  /** Gets or sets an object with the location information for the log data. */
  location: IAddressLookupData;
  /**
   * Gets or sets the {@link IDutyStatusLog} record. As a flag it can be both a diagnostic
   * and malfunction state which is used to mark status based records (e.g. "D", "SB")
   * as having a diagnostic or malfunction present at time of recording.
   */
  malfunction?: DutyStatusMalfunctionTypes;
  /** Gets or sets the odometer in meters for the at the of this log. */
  odometer?: number;
  /** Gets or sets the {@link IDutyStatusOrigin} from where this log originated. */
  origin?: DutyStatusOrigin;
  /**
   * Gets or sets the of the parent {@link IDutyStatusLog}. Used when a DutyStatusLog
   * is edited. When returning history, this field will be populated.
   */
  parentId: string;
  /** Gets or sets the sequence number, which is used to generate the sequence ID. */
  sequence?: number;
  /** Gets or sets the {@link IDutyStatusLog} record. */
  state?: DutyStatusState;
  /** Gets or sets the {@link IDutyStatusLogType} representing the driver's duty status. */
  status?: DutyStatusLogType;
  /**
   * Gets or sets the date and time the log was verified. If the log is unverified, this
   * will not be set.
   */
  verifyDateTime?: Date;
  /**
   * @inheritdoc
   */
  version?: number;
}
