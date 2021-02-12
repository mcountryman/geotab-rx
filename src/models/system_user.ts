/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUserSystem } from './user_system';

/**
 * The internal user that has access to everything and is used internally by MyGeotab
 * processes.
 */
export interface ISystemUser extends IUserSystem {}
