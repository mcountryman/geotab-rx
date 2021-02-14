/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISystemGroupBase } from "./system_group_base";

/**
 * This is a system group see with an Id of . It contains private groups for all users,
 * see . Each user ideally would one group under this group. This way, it will be easy
 * to schedule a report or a dashboard for a user.
 */
export interface IPrivateUserGroup extends ISystemGroupBase {
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}
