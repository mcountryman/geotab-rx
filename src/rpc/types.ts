import { BehaviorSubject, Observable } from "rxjs";
import { ICredentials } from "../models/credentials";

/** The rpc call represented as request object */
export interface IRpcRequest<
  TParams extends Record<string, any> = Record<string, any>
> {
  /**
   * The identifier established by the client that MUST contain a String, Number, or NULL
   * value if included. If it is not included it is assumed to be a notification. The
   * value SHOULD normally not be Null and Numbers SHOULD NOT contain fractional parts.
   */
  id?: string | number | null;
  /**
   * The string containing the name of the method to be invoked. Method names that begin
   * with the word rpc followed by a period character (U+002E or ASCII 46) are reserved
   * for rpc-internal methods and extensions and MUST NOT be used for anything else.
   */
  method: string;
  /**
   * The structured value that holds the parameter values to be used during the invocation
   * of the method. This member MAY be omitted.
   */
  params: TParams;
  /** The string specifying the version of the JSON-RPC protocol. MUST be exactly "2.0". */
  jsonrpc: "2.0";
}

export interface IRpcResponse<TResult = unknown> {
  /**
   * This member is REQUIRED.
   * It MUST be the same as the value of the id member in the Request Object.
   * If there was an error in detecting the id in the request object, it MUST be Null.
   */
  id?: string | number | null;
  /**
   * This member is REQUIRED on error.
   * This member MUST NOT exist if there was no error triggered during invocation.
   */
  error?: IRpcError;
  /**
   * This member is REQUIRED on success.
   * This member MUST NOT exist if there was an error invoking the method.
   * The value of this member is determined by the method invoked on the server.
   */
  result?: TResult;
  /** The string specifying the version of the JSON-RPC protocol. MUST be exactly "2.0". */
  jsonrpc: "2.0";
}

/** Represents batch request parameters. */
export interface IRpcBatchRequestParams {
  /**  */
  calls: IRpcRequest[];
  credentials?: Partial<ICredentials>;
}

/**  Represents batched JSONRPC request. */
export interface IRpcBatchRequest extends IRpcRequest<IRpcBatchRequestParams> {
  /** The GeoTab batch call method name. */
  method: "ExecuteMultiCall";
}

/** Represents batched JSONRPC response. */
export interface IRpcBatchResponse extends IRpcResponse {
  /** The id of the request, always undefined. */
  id: undefined;
  /** The batch response data. */
  result?: unknown[];
}

/** Represents JSONRPC response error object. */
export interface IRpcError {
  /** The number that indicates the error type. */
  code: number;
  /** The primitive or structured value that contains additional information. */
  data?: unknown;
  /** The message describing the error. */
  message: string;
}

/** Http response */
export interface IHttpResponse {
  /** The JSON encoded body. */
  body: string;
}

/** Facilitates `HTTP` `POST` requests */
export interface IHttpAdapter {
  /**
   * Send `POST` request with supplied JSON body to supplied url returing JSON encoded
   * resoponse.
   * @param url The url to send HTTP request to.
   * @param body The JSON serialized body.
   * @returns The JSON serialized body.
   */
  post(url: string, body: string): Observable<IHttpResponse>;
}

export class RpcError extends Error {
  constructor(
    public readonly error: IRpcError,
    public readonly code = error.code
  ) {
    super();
    this.message = error.message;
  }
}

export function makeSubject<T>(value: T): BehaviorSubject<T> {
  return new BehaviorSubject(value);
}

export function makeNullableSubject<T>(): BehaviorSubject<T | undefined> {
  return new BehaviorSubject<T | undefined>(undefined);
}
