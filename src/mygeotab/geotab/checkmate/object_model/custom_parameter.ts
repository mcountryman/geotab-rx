/* eslint-disable @typescript-eslint/no-empty-interface */


/**
* A custom parameter extends the parameters already supported by MyGeotab. This enables
* one to add a parameter to MyGeotab that is not explicitly supported in the user
* interface.
*/
export interface ICustomParameter
{
  /** Gets or sets the byte values of the parameter starting at offset. */
  bytes: number[];
  /**
  * Gets or sets the description of {@link ICustomParameter} that is displayed to the
  * user. It does not in any way relate to the data that is actually stored in the parameter
  * itself.
  */
  description: string;
  /**
  * Gets or sets a value indicating whether enables or disables this parameter. If disabled,
  * the parameter won't be sent and the values 0 will be sent in the buffer.
  */
  isEnabled: boolean;
  /**
  * Gets or sets the offset into the parameter area where this {@link ICustomParameter}
  * will be written to.
  */
  offset: number;
}
