/* eslint-disable @typescript-eslint/no-empty-interface */


/** The result of queueing a database to send registries to registry service. */
export interface IRegistryQueueResult
{
  /** Gets or sets the name of the database the result is for. */
  database: string;
  /** Gets or sets a value indicating whether the database was queued or not. */
  queued: boolean;
}
