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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  limit?: number;
}