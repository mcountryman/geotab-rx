import { Observable } from "rxjs";
import { Repo, RepoEntity } from "./types";

/**
 * Adds a new entity to the database. In most cases, the entity being added will need to
 * be fully constructed. In other words, all its properties need to be defined. These
 * requirements are defined in each entity definition.
 *
 * @example
 * Create a driver change record:
 * ```
 * import { Geotab } from "geotab-rx";
 * import { create } from "geotab-rx/repository/create";
 * import { IUser } from "geotab-rx/models/user";
 * import { IDevice } from "geotab-rx/models/device";
 *
 * function assignDriverToDevice(geotab: Geotab, driver: IUser, device: IDevice) {
 *   create(geotab.driverChanges, {
 *     type: "Driver",
 *     driver,
 *     device,
 *     dateTime: new Date(),
 *   })
 *     .subscribe(changeId =>
 *       console.log(`Created driver change with id = '${changeId}'`)
 *     )
 * }
 * ```
 *
 * @param repo - The repository to add entity to.
 * @param entity - The entity to create.
 * @returns - The newly created entity id.
 */
export function create<TRepo extends Repo<TEntity>, TEntity = RepoEntity<TRepo>>(
  repo: TRepo,
  entity: Partial<TEntity>
): Observable<string> {
  return repo.client.call("Add", {
    entity,
    typeName: repo.typeName,
  });
}
