import { Observable } from "rxjs";
import { filter, map, mergeMap, tap } from "rxjs/operators";
import { IFeedResult } from "./models/feed_result";
import { IRpcClient } from "./rpc";

export class Repo<TEntity, TSearch> {
  constructor(
    /** The rpc client. */
    protected readonly _client: IRpcClient,
    /**
     * The type name of entity
     *
     * @remarks Used in all requests dispatched from `Repo` to denote what object type to
     * return.
     * */
    protected readonly _typeName: string
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

export class FeedRepo<TEntity, TSearch> extends Repo<TEntity, TSearch> {
  constructor(
    private readonly _poll$: Observable<number>,
    client: IRpcClient,
    typeName: string,
  ) {
    super(client, typeName);
  }

  observe(search?: Partial<TSearch>): Observable<TEntity[]> {
    return this._poll$.pipe(
      mergeMap(() => this._client.call<IFeedResult<TEntity>>("GetFeed", {
        search,
        typeName: this._typeName,
        fromVersion: this._fromVersion,
        resultsLimit: 0,
      })),
      tap(feed => this._fromVersion = feed.toVersion),
      filter(feed => !!feed.data),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      map(feed => feed.data!)
    );
  }

  private _fromVersion?: number;
}
