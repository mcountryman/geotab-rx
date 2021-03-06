/* eslint-disable @typescript-eslint/no-empty-interface */

/** The status of the notification. */
export enum NotificationStatus {
  /** Status is unknown until first attempt to open downloader */
  StatusUnknown = "StatusUnknown",
  /** User has disabled Radio Downloader */
  StatusDisabled = "StatusDisabled",
  /** Enabled but no device found */
  StatusDisconnected = "StatusDisconnected",
  /** Enabled and connected */
  StatusConnected = "StatusConnected",
  /** Debug status */
  StatusDebug = "StatusDebug",
  /** Idle */
  StatusIdle = "StatusIdle",
  /** Stop */
  StatusStopped = "StatusStopped",
  /** Unlocked */
  StatusUnlocked = "StatusUnlocked",
  /** Running without available aiding data */
  StatusRunningNoAidingDataAvailable = "StatusRunningNoAidingDataAvailable",
  /** Running */
  StatusRunning = "StatusRunning",
  /** FTDI not installed */
  StatusFTDINotInstalled = "StatusFTDINotInstalled",
  /** Trying to lock */
  StatusTryingToLock = "StatusTryingToLock",
  /** Authentication failed */
  StatusAuthenticationFailed = "StatusAuthenticationFailed",
  /** Authentication not supported */
  StatusAuthenticationNotSupported = "StatusAuthenticationNotSupported",
  /** Authentication scheme not provided */
  StatusAuthenticationSchemeNotProvided = "StatusAuthenticationSchemeNotProvided",
  /** Unknown response from server */
  StatusUnknownResponseFromServer = "StatusUnknownResponseFromServer",
  /** Server not found */
  StatusServerNotFound = "StatusServerNotFound",
  /** Proxy server not found */
  StatusProxyServerNotFound = "StatusProxyServerNotFound",
  /** Timeout */
  StatusTimeout = "StatusTimeout",
  /** Proxy timeout */
  StatusProxyTimeout = "StatusProxyTimeout",
  /** Device registration failed. */
  StatusDeviceRegistrationFailed = "StatusDeviceRegistrationFailed",
  /** Connecting */
  StatusConnecting = "StatusConnecting",
  /** Update message count failed */
  UpdateMessageCountsFailed = "UpdateMessageCountsFailed",
  /** Invalid Orbcomm Customer */
  InvalidOrbcommCustomer = "InvalidOrbcommCustomer",
  /** Thread finish timeout */
  ThreadFinishTimeout = "ThreadFinishTimeout",
  /** Waiting for database upgrade */
  StatusWaitingForUpgrade = "StatusWaitingForUpgrade",
  /** User cleared status */
  StatusUserCleared = "StatusUserCleared",
  /** Status missing */
  StatusMissing = "StatusMissing",
  /** Service Manager connected */
  StatusServiceManagerConnected = "StatusServiceManagerConnected",
  /** Cache Cleared */
  CacheCleared = "CacheCleared",
  /** Cache Busy */
  CacheBusy = "CacheBusy",
  /** An Exception occurred */
  StatusExceptionOccurred = "StatusExceptionOccurred",
  /** An Exception occurred */
  StatusDeviceDeleted = "StatusDeviceDeleted",
  /** Status delayed */
  StatusDelayed = "StatusDelayed",
}
