/* eslint-disable @typescript-eslint/no-empty-interface */


/** The current driving state of a vehicle. */
export enum DrivingState { 
  /** There is no status */
  None = "None", 
  /** The vehicle is driving */
  Driving = "Driving", 
  /** The vehicle is idling or driving slowly */
  IdlingOrDrivingSlowly = "IdlingOrDrivingSlowly", 
  /** The vehicle is stopped */
  Stopped = "Stopped", 
  /** The vehicle is idling */
  Idling = "Idling", 
  /** The vehicle is parked */
  Parked = "Parked"
}
