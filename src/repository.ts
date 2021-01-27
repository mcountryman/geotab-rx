import { Observable } from "rxjs";
import { IRpcClient } from "./rpc";

export class Repo<TEntity, TSearch> {
  constructor(
    /** The rpc client. */
    private readonly _client: IRpcClient,
    /** 
     * The type name of entity 
     * 
     * @remarks Used in all requests dispatched from `Repo` to denote what object type to
     * return.
     * */
    private readonly _typeName: string
  ) {}

  /**
   * Create an entity and return observable of created entity.
   * @param entity The entity to create.
   */
  create(entity: TEntity): Observable<TEntity> {
    return this._client.call("Add", entity);
  }

  /**
   * Update an entity and return observable of updated entity.
   * @param entity The entity to update.
   */
  update(entity: TEntity): Observable<TEntity> {
    return this._client.call("Set", entity);
  }

  /**
   * Delete an entity.
   * @param entity The entity to delete.
   */
  delete(entity: TEntity): Observable<void> {
    return this._client.call("Remove", {
      typeName: this._typeName,
      entity,
    });
  }

  /**
   * Get all entities.
   */
  find(): Observable<TEntity[]>;
  /**
   * Get entities with record limit supplied by @param searchOrLimit. 
   * @param searchOrLimit The number of records to return.
   */
  find(searchOrLimit?: number): Observable<TEntity[]>;
  /**
   * Get entities by search conditions or by limit supplied by @param searchLimit.
   * @param searchOrLimit The search conditions or the number of records to return.
   */
  find(searchOrLimit?: number | Partial<TSearch>): Observable<TEntity[]>;
  /**
   * Get entities by supplied search condition and limit records by supplied limit.
   * @param searchOrLimit - The search conditions
   * @param limit - The entity limit
   * @throws When both @param searchOrLimit and @param limit are `number`s. 
   */
  find(
    searchOrLimit?: number | Partial<TSearch>,
    limit?: number
  ): Observable<TEntity[]> {
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
}
