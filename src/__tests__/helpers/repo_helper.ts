import { Observable } from "rxjs";
import { Repo } from "../../repository/types";
import { IRpcRequest, IRpcResponse } from "../../rpc/types";
import { mockRpcClient } from "./client_helpers";

export function mockRepo<TEntity, TSearch = unknown>(
  typeName: string,
  op: (req$: Observable<IRpcRequest>) => Observable<IRpcResponse>
): Repo<TEntity, TSearch> {
  return new Repo(mockRpcClient(op), typeName);
}
