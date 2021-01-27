/* eslint-disable @typescript-eslint/no-empty-interface */
import { SecurityIdentifier } from '../../../geotab/checkmate/object_model/security_identifier';
import { ISecurityId } from '../../../geotab/checkmate/object_model/i_security_id';



/**
*  Represents an item that either Adds or Removes a particular to a user's set of
* allowed items.
*/
export interface ISecurityFilter
{
  /**
  * Gets or sets a value indicating whether this feature is Added or Removed. Please
  * note this property is evaluated in<br> the context of the SecurityFilter(s) available
  * to the parent SecurityClearance.<br> 
  */
  isAdd: boolean;
  /** Gets or sets the . */
  securityId: ISecurityId;
  /**
  * Gets or sets the identifier that provides a security identity for control of access.
  * See .
  */
  securityIdentifier?: SecurityIdentifier;
}
