/* eslint-disable @typescript-eslint/no-empty-interface */

/** Indicates the JSON-RPC error type that occurred. Derived from JSON-RPC 2.0 specification. */
export enum JsonRpcErrorCode {
  /** The default value. */
  None = 'None',
  /**
   * Invalid JSON was received by the server. An error occurred on the server while parsing
   * the JSON text.
   */
  ParseError = 'ParseError',
  /** Internal JSON-RPC error. */
  InternalError = 'InternalError',
  /** Invalid method parameter(s). */
  InvalidParams = 'InvalidParams',
  /** The method does not exist / is not available. */
  MethodNotFound = 'MethodNotFound',
  /** The JSON sent is not a valid Request object. */
  InvalidRequest = 'InvalidRequest',
  /** The server responded with {@link IGroupRelationViolatedException}. */
  GroupRelationViolatedError = 'GroupRelationViolatedError',
  /** The server responded with {@link INone}. */
  DbUnavailableGeneralError = 'DbUnavailableGeneralError',
  /** The server responded with {@link IConnectionFailure}. */
  DbUnavailableConnectionFailure = 'DbUnavailableConnectionFailure',
  /** The server responded with {@link IUnknownDatabase}. */
  DbUnavailableUnknownDatabase = 'DbUnavailableUnknownDatabase',
  /** The server responded with {@link IInitializing}. */
  DbUnavailableInitializing = 'DbUnavailableInitializing',
  /** The server responded with {@link IOperationAborted}. */
  DbUnavailableOperationAborted = 'DbUnavailableOperationAborted',
  /** Invalid certificate error. */
  InvalidCertificateException = 'InvalidCertificateException',
  /** Internal server error. */
  InternalServerError = 'InternalServerError',
}
