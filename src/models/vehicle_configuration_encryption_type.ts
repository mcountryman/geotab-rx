/* eslint-disable @typescript-eslint/no-empty-interface */

/** The type of encryption of . */
export enum VehicleConfigurationEncryptionType {
  /** No encryption */
  NoEncryption = "NoEncryption",
  /** AES-256. Encrypted by key from credentials.xml */
  AES256CredentialsKey = "AES256CredentialsKey",
}
