/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { BinaryPayloadType } from "./binary_payload_type";

/**  A message containing a binary payload which is usually forwarded to a target device. */
export interface IBinaryPayload extends IEntity {
  /**
   * Gets or sets The Id..
   *
   * @deprecated
   */
  id: string;
  /** Gets the raw binary data contained in the message. */
  payload: number[];
  /** Gets or sets the . */
  payloadType?: BinaryPayloadType;
}
