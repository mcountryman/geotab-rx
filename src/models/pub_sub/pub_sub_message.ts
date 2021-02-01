/* eslint-disable @typescript-eslint/no-empty-interface */

/** A PubSub message sent. */
export interface IPubSubMessage {
  /** Gets or sets the data sent to or from the pub sub. */
  data: any;
  /** Gets or sets the subscription. */
  subscriptionId: string;
}
