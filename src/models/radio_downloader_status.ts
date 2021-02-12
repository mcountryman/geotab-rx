/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * The current radio downloader status. This keeps track of the stage of configuring
 * the Ethernet Downloader.
 */
export enum RadioDownloaderStatus {
  /**
   * The system is currently searching for this Ethernet Downloader and will try configure
   * it once found.
   */
  ConfigurationPending = 'ConfigurationPending',
  /**
   * This Ethernet Downloader has been discovered and programmed but has not yet connected
   * back.
   */
  Discovered = 'Discovered',
  /** The Ethernet Downloader has been configured and connected back to the server successfully. */
  Configured = 'Configured',
  /** The Ethernet Downloader could not be found. */
  NotFound = 'NotFound',
}
