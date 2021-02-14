/* eslint-disable @typescript-eslint/no-empty-interface */
import { PubSubDataUpdateVerb } from "../pub_sub/pub_sub_data_update_verb";

/**
 * An object used to signal that data has changed using pub sub. This is meant to be
 * the .
 */
export interface IPubSubDataUpdateData<T> {
  /** Gets a list of {@link IIEntity}s that were updated. */
  data: string[];
  /** Gets the object. */
  entityData: any;
  /**
   * Gets the id of the sender sending the update. This is optional. If provided it should
   * follow the convention idBigNumber (eg id123456789101112).
   */
  senderId: string;
  /** Gets the type of {@link IIEntity} that was updated. */
  type: string;
  /** Gets the type of update. */
  verb: PubSubDataUpdateVerb;
}
