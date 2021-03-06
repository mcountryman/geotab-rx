/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "../entity";
import { IController } from "../engine/controller";
import { IDevice } from "../device";
import { IDiagnostic } from "../engine/diagnostic";
import { IUser } from "../user";
import { IFailureMode } from "../engine/failure_mode";
import { FaultLampState } from "../engine/fault_lamp_state";
import { FaultState } from "../engine/fault_state";
import { IFlashCode } from "../engine/flash_code";
import { DtcSeverity } from "../engine/dtc_severity";
import { DtcClass } from "../engine/dtc_class";

/**
 *  A record that represents a fault code record from the engine system of the specific
 * .
 */
export interface IFaultData extends IEntity {
  /** Gets or sets whether the amber warning lamp state. */
  amberWarningLamp?: boolean;
  /** Gets or sets the {@link IDtcClass} code of the fault. */
  classCode?: DtcClass;
  /** Gets or sets the code related to the fault code; if applicable. */
  controller: IController;
  /** Gets or sets the number of times the fault occurred. */
  count?: number;
  /** Gets or sets the date and time at which the event occurred. */
  dateTime?: Date;
  /** Gets or sets the that generated the fault. */
  device: IDevice;
  /** Gets or sets the associated with the fault. */
  diagnostic: IDiagnostic;
  /** Gets or sets the date and time that the DismissUser dismissed the fault. */
  dismissDateTime?: Date;
  /** Gets or sets the that dismissed the fault. */
  dismissUser: IUser;
  /** Gets or sets the of the fault; if applicable. */
  failureMode: IFailureMode;
  /** Gets or sets the of a J1939 vehicle. See for the possible values. */
  faultLampState?: FaultLampState;
  /** Gets or sets the code from the engine system of the specific device. */
  faultState?: FaultState;
  /** Gets or sets the associated with the fault. */
  flashCode: IFlashCode;
  /** Gets or sets the unique identifier for the entity. See . */
  id: string;
  /** Gets or sets the malfunction light state. */
  malfunctionLamp?: boolean;
  /** Gets or sets whether the protect warning lamp is on. */
  protectWarningLamp?: boolean;
  /** Gets or sets whether the red stop lamp is on. */
  redStopLamp?: boolean;
  /** Gets or sets the {@link IDtcSeverity} of the fault. */
  severity?: DtcSeverity;
  /** Gets or sets the source address for enhanced faults. */
  sourceAddress?: number;
}
