/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUserSystem } from "./user_system";

/** A that is used when no user specific user is assigned to objects, eg. Notifications. */
export interface INoUser extends IUserSystem {}
