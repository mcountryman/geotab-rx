/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from "../name_entity";

/**
 *  The source is the underlying producer of the engine data. The source can be one
 * of the following "SourceJ1708Id", "SourceJ1939Id", "SourceObdId", "SourceGeotabGoId",
 * "SourceSystemId", "SourceObdSaId", "SourceProprietaryId", "SourceLegacyId" and "SourceThirdPartyId"
 * strings in JSON.
 */
export interface ISource extends INameEntity {
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
}
