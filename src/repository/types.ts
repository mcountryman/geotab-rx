import { IRpcClient } from "../rpc";

export type Search<TSearch> = DeepPartial<TSearch> & ILimit;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type RepoEntity<TRepo> = TRepo extends Repo<infer TEntity>
  ? TEntity
  : unknown;

export type RepoSearch<TRepo> = TRepo extends Repo<unknown, infer TSearch>
  ? TSearch
  : unknown;

export class Repo<TEntity, TSearch = unknown> {
  constructor(
    /** The rpc client. */
    public readonly client: IRpcClient,
    /**
     * The type name of entity
     *
     * @remarks Used in all requests dispatched from `Repo` to denote what object type to
     * return.
     * */
    public readonly typeName: string
  ) {}
}

export interface ILimit {
  /**
   * The maximum number of records to return. The default and the maximum value varies per
   * retrieval method and per repository.
   *
   * @see {@link https://geotab.github.io/sdk/software/api/reference/#M:Geotab.Checkmate.Database.DataStore.Get1}
   * @see {@link https://geotab.github.io/sdk/software/api/reference/#M:Geotab.Checkmate.Database.DataStore.GetFeed1}
   */
  limit?: number;
}
