/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEngineTypeSystem } from '../engine/engine_type_system';

/**
 *  Represents an empty (null) {@link IEngineType}, used for devices that are not engine-assigned.
 *
 * @deprecated
 */
export interface IEngineTypeNone extends IEngineTypeSystem {}
