/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDevice } from './device';

/**
 * A custom third-party device that is used in MyGeotab. This is used for extensibility
 * and is based on the {@link IDevice} object.
 */
export interface ICustomDevice extends IDevice {}
