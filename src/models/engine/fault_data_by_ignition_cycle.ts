/* eslint-disable @typescript-eslint/no-empty-interface */
import { IFaultData } from "../engine/fault_data";

/**
 * A record that represents a fault code record from the engine system of the specific
 * populated with ignition cycle information.
 */
export interface IFaultDataByIgnitionCycle extends IFaultData {
  /** Gets the ignition cycle count for this instance of the . */
  cycleCount: number;
  /** Gets the ignition cycle end time for this instance of the . */
  cycleEndDateTime?: Date;
}
