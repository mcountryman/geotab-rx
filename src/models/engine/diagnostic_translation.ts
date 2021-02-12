/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../name_entity';
import { IDiagnostic } from '../engine/diagnostic';

/**
 *  Vehicle diagnostic translation. Note: this class should only be used for migration
 * purpose.<br>
 *
 * @deprecated
 */
export interface IDiagnosticTranslation extends INameEntity {
  /** Gets or sets the . */
  diagnostic: IDiagnostic;
  /** Gets or sets language id. */
  language: string;
}
