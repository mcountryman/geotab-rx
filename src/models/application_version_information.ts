/* eslint-disable @typescript-eslint/no-empty-interface */

/** The inner object for the ApplicationInformation information in VersionInformation. */
export interface IApplicationVersionInformation {
  /** Gets the branch. */
  branch: string;
  /** Gets the build. */
  build: string;
  /** Gets the commit. */
  commit: string;
  /** Gets the build and commit together. */
  full: string;
}
