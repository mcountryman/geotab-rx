/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from './entity_with_version';
import { IUser } from './user';
import { IGroup } from './group';
import { IDVIRDefect } from './d_v_i_r_defect';
import { IDevice } from './device';
import { ITrailer } from './trailer';
import { DVIRLogType } from './d_v_i_r_log_type';
import { IAddressLookupData } from './address_lookup_data';

/**
 *  A DVIRLog is a Driver Vehicle Inspection Report which is prepared by a driver regarding
 * defects in parts of a vehicle associated with a {@link IDevice} or {@link ITrailer}.
 * Once the report is completed with optional driver remarks, the DVIR log will be
 * acted upon, and marked as repairs made or not necessary (usually by another {@link
 * IUser}). The driver then will mark the log as certified for being safe or unsafe
 * to operate based on the effectiveness of any repairs made or comments for repairs
 * not performed.
 */
export interface IDVIRLog extends IEntityWithVersion {
  /**
   * Gets or sets the authority address for the driver at the time of this log. Maximum
   * length [255] Default [""].
   */
  authorityAddress: string;
  /**
   * Gets or sets the authority name for the driver at the time of this log. Maximum
   * length [255] Default [""].
   */
  authorityName: string;
  /**
   * Gets or sets the {@link IUser} who certified the repairs (or comments if no repairs
   * were made) to the {@link IDevice} or {@link ITrailer}.
   */
  certifiedBy: IUser;
  /** Gets or sets the date the {@link IDevice} or {@link ITrailer} was certified. */
  certifyDate?: Date;
  /**
   * Gets or sets the remark recorded by the {@link IUser} who certified the repairs
   * (or no repairs made) to the {@link IDevice} or {@link ITrailer}.
   */
  certifyRemark: string;
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets the defect list {@link IGroup} of the log. */
  defectList: IGroup;
  /** Gets or sets the list of defect {@link IGroup}(s) for this log. */
  defects: IGroup[];
  /**
   * Gets or sets the {@link IDevice} associated with this log. Either a Device or a
   * {@link ITrailer} is defined for a log, not both (if the device is set, trailer must
   * be null).
   */
  device: IDevice;
  /** Gets or sets the {@link IUser} who created the log. */
  driver: IUser;
  /** Gets or sets the remark recorded by the driver for this log. */
  driverRemark: string;
  /** Gets or sets the list of DVIRDefects {@link IDVIRDefect}(s) for this log. */
  dvirDefects: IDVIRDefect[];
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
   * Gets or sets a value indicating whether the DVIR log was inspected by the driver.
   * If false, the log was inspected by an inspector. Default [true].
   */
  isInspectedByDriver?: boolean;
  /**
   * Gets or sets a value indicating whether the DVIR log was marked as rejected by the
   * driver. Default [false].
   */
  isRejected?: boolean;
  /**
   * Gets or sets identifier for whether or not the {@link IDevice} or {@link ITrailer}
   * was certified as safe to operate.
   */
  isSafeToOperate?: boolean;
  /**
   * Gets or sets the load height, if it was manually recorded by the driver. Default
   * [null].
   */
  loadHeight?: number;
  /**
   * Gets or sets the load width, if it was manually recorded by the driver. Default
   * [null].
   */
  loadWidth?: number;
  /** Gets or sets an object with the location information of the log. */
  location: IAddressLookupData;
  /** Gets or sets the {@link IDVIRLogType} of the log. Default [Unknown]. */
  logType?: DVIRLogType;
  /**
   * Gets or sets the odometer or hubometer of the vehicle or trailer, respectively,
   * if it was manually recorded by the driver. Default [null].
   */
  odometer?: number;
  /** Gets or sets the date the {@link IDevice} or {@link ITrailer} was repaired. */
  repairDate?: Date;
  /** Gets or sets the {@link IUser} who repaired the {@link IDevice} or {@link ITrailer}. */
  repairedBy: IUser;
  /**
   * Gets or sets the remark recorded by the {@link IUser} who repaired the {@link IDevice}
   * or {@link ITrailer}.
   */
  repairRemark: string;
  /**
   * Gets or sets the {@link ITrailer} associated with this log. Either a {@link IDevice}
   * or a Trailer is defined for a log, not both (if the trailer is set, device must
   * be null).
   */
  trailer: ITrailer;
}
