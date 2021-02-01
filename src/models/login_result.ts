/* eslint-disable @typescript-eslint/no-empty-interface */
import { ICredentials } from "./credentials";

/**  The results of an authentication attempt. */
export interface ILoginResult {
  /** Gets or sets the {@link ICredentials} to be used when making calls to MyGeotab. */
  credentials: ICredentials;
  /**
   * Gets or sets the path of server hosting the database. "ThisServer" if successfully
   * logged in to this server, or "servername". The caller must handle prepending the
   * protocol.
   */
  path: string;
}
