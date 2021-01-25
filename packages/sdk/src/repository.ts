import { Observable } from "rxjs";
import { IRpcClient } from "./rpc";

export class Repo<TEntity, TSearch> {
  constructor(
    private readonly _client: IRpcClient,
    private readonly _typeName: string
  ) {}

  create(entity: TEntity): Observable<TEntity> {
    return this._client.call("Add", entity);
  }

  update(entity: TEntity): Observable<TEntity> {
    return this._client.call("Set", entity);
  }

  delete(entity: TEntity): Observable<void> {
    return this._client.call("Remove", {
      typeName: this._typeName,
      entity,
    });
  }

  find(): Observable<TEntity>;
  find(searchOrLimit?: number): Observable<TEntity>;
  find(searchOrLimit?: number | Partial<TSearch>): Observable<TEntity>;
  find(
    searchOrLimit?: number | Partial<TSearch>,
    limit?: number
  ): Observable<TEntity> {
    const search: Partial<TSearch> | undefined =
      typeof searchOrLimit === "number" ? {} : searchOrLimit;
    const resultsLimit =
      typeof searchOrLimit === "number" ? searchOrLimit : limit;

    if (typeof resultsLimit === "number" && typeof limit === "number") {
      throw new Error(
        "Expected search object and limit, got two numeric limits"
      );
    }

    return this._client.call("Get", {
      typeName: this._typeName,
      search,
      resultsLimit,
    });
  }

  // findOne(search: Partial<TSearch>): Promise<TEntity[]>;
  // subscribe(search: Partial<TSearch>): Observable<TEntity>;
}
