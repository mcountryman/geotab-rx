/* eslint-disable @typescript-eslint/no-empty-interface */
import { IRadioDownloader } from "./radio_downloader";

/** Represents a 900MHz downloader that has an Ethernet port (as opposed to a USB) port. */
export interface IEthernetRadioDownloader extends IRadioDownloader {
  /** Gets or sets the DNS server configured for the Ethernet Downloader. */
  dns: any;
  /** Gets or sets the gateway address for the Ethernet Downloader. */
  gateway: any;
  /** Gets or sets the IP address for the Ethernet Downloader. */
  ipAddress: any;
  /** Gets or sets toggles Dhcp on or off. */
  isDhcp?: boolean;
  /**
   * Gets or sets the server IP address or DNS name that the Ethernet Downloader connects
   * to.
   */
  serverAddress: string;
  /** Gets or sets the subnet configured for the Ethernet Downloader. */
  subnet: any;
}
