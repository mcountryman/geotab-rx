/* eslint-disable @typescript-eslint/no-empty-interface */


/**
* The user authentication type. User types are XOR'd, so each type must be 2\*\*X
* so that no type is a combination of two others.
*/
export enum UserAuthenticationType { 
  /** None or unknown. */
  None = "None", 
  /** Authentication using passwords. */
  BasicAuthentication = "BasicAuthentication", 
  /** Authentication using Windows Domains. */
  WindowsAuthentication = "WindowsAuthentication", 
  /** MyAdmin global user */
  MyAdmin = "MyAdmin", 
  /** Authentication using SAML. */
  SAML = "SAML", 
  /** Authentication using Certificate. */
  ClientCertificate = "ClientCertificate"
}
