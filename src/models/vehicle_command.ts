/* eslint-disable @typescript-eslint/no-empty-interface */

/** An enum with a list of commands that can be sent to a vehicle via a {@link IVehicleCommandContent}. */
export enum VehicleCommand {
  /** Lock everything. */
  LockAll = "LockAll",
  /** Unlock the driver door. */
  UnlockDriver = "UnlockDriver",
  /** Unlock everything. */
  UnlockAll = "UnlockAll",
  /** Open the trunk. */
  OpenTrunk = "OpenTrunk",
  /** Close the trunk. */
  CloseTrunk = "CloseTrunk",
  /** Not sure. */
  Locate = "Locate",
  /** Immobilize the vehicle. */
  Immobilize = "Immobilize",
  /** Remove vehicle immobilization. */
  Mobilize = "Mobilize",
  /** Set off the alarm. */
  PanicAlarmOn = "PanicAlarmOn",
  /** Stop the alarm once started. */
  PanicAlarmOff = "PanicAlarmOff",
  /** Check in to the vehicle. */
  CheckIn = "CheckIn",
  /** Check out of the vehicle. */
  CheckOut = "CheckOut",
  /** Connect. */
  Connect = "Connect",
  /** Stop the alarm once started. */
  Disconnect = "Disconnect",
  /** Stop the alarm once started. */
  Observe = "Observe",
  /** Stop the alarm once started. */
  CreateReservation = "CreateReservation",
  /** Stop the alarm once started. */
  ReadReservation = "ReadReservation",
  /** Stop the alarm once started. */
  ModifyReservation = "ModifyReservation",
  /** Stop the alarm once started. */
  DeleteReservation = "DeleteReservation",
  /** Stop the alarm once started. */
  ServiceModeRequest = "ServiceModeRequest",
  /** Stop the alarm once started. */
  BlacklistUser = "BlacklistUser",
  /** Stop the alarm once started. */
  RemoteStart = "RemoteStart",
}
