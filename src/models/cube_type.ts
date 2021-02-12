/* eslint-disable @typescript-eslint/no-empty-interface */

/** The type of . */
export enum CubeType {
  /** No cube type is specified */
  None = 'None',
  /** ExceptionEvent Cube for Device */
  ExceptionEventByDevice = 'ExceptionEventByDevice',
  /** ExceptionEvent Cube for Driver */
  ExceptionEventByDriver = 'ExceptionEventByDriver',
  /** Trip Cube for Device */
  TripSummaryByDevice = 'TripSummaryByDevice',
  /** Trip Cube for Driver */
  TripSummaryByDriver = 'TripSummaryByDriver',
}
