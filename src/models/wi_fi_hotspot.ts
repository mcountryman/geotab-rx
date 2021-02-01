/* eslint-disable @typescript-eslint/no-empty-interface */
import { IVehicleConfiguration } from "./vehicle_configuration";

/** WiFi parameters entity. */
export interface IWiFiHotspot extends IVehicleConfiguration {
  /** Gets or sets the WiFi password. */
  password: string;
  /** Gets or sets the WiFi SSID. */
  ssid: string;
}
