/* eslint-disable @typescript-eslint/no-empty-interface */
import { IApplicationVersionInformation } from '../../../geotab/checkmate/object_model/i_application_version_information';



/** Software version information for the server. */
export interface IVersionInformation
{
  /** Gets or sets the {@link IApplicationVersionInformation}. */
  application: IApplicationVersionInformation;
  /** Gets or sets the current version of the MyGeotab databases on the server. */
  database: string;
  /** Gets or sets the Text to Speech firmware version provided by the server. */
  goTalk: string;
  /**
  * Gets or sets the current version of MyGeotab, branch, and commit hash running on
  * the server.
  */
  server: string;
  /** Gets or sets the server flags. */
  serverFlags: number;
}
