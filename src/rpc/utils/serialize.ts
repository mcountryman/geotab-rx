import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IRpcRequest, IHttpResponse, IRpcResponse } from "..";

const DATE_EXPR = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)/;

/**
 * Serialize stream of {@link IRpcRequest} to JSON
 */
export function serializeRequest<TRpcRequest extends IRpcRequest>(req: TRpcRequest) {
  return JSON.stringify(req);
}

/**
 * Map stream of {@link IHttpResponse} body to {@link IRpcResponse}
 */
export function deserializeResponse() {
  return (json$: Observable<IHttpResponse>) =>
    json$.pipe(map((res) => JSON.parse(res.body, deserializeField) as IRpcResponse));
}

function deserializeField(name: string, value: any): any {
  return deserializeValue(value);
}

function deserializeValue(value: any): any {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      value[i] = deserializeValue(value[i]);
    }
  }

  if (typeof value === "string" && DATE_EXPR.test(value)) {
    return new Date(value);
  }

  return value;
}
