/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * A type of {@link IUser} support contact. User contact can be call, training or procurement
 * support
 */
export enum UserSupportType {
  /** A {@link IUser} support contact whom will be redirected all calls. */
  Call = "Call",
  /** A {@link IUser} as a training support contact. */
  Training = "Training",
  /** A {@link IUser} as a procurement support contact. */
  Procurement = "Procurement",
}
