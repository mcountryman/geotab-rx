/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';



/**
* An object representing a {@link IX509Certificate2} used to check if a message came
* from the correct external source.
*/
export interface ICertificate extends IEntity
{
  /**
  * Gets or sets a value indicating whether certificate is a root certificate that is
  * used for validating all client certificate.
  */
  isRoot: boolean;
  /** Gets or sets the issuer of the {@link ICertificate}. */
  issuer: string;
  /** Gets or sets the public key of the {@link ICertificate}. */
  key: any;
  /** Gets or sets the {@link ICertificate} logs in. */
  logInUrl: any;
  /** Gets or sets the {@link ICertificate} logs off. */
  logOffUrl: any;
}
