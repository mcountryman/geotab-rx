/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from '../name_entity_with_version';
import { IController } from '../engine/controller';
import { DiagnosticType } from '../engine/diagnostic_type';
import { IEngineType } from '../engine/engine_type';
import { FaultResetMode } from '../engine/fault_reset_mode';
import { ISource } from '../engine/source';
import { IUnitOfMeasure } from '../engine/unit_of_measure';
import { ValidLoggingPeriod } from '../valid_logging_period';

/**
 * Vehicle diagnostic information from the engine computer that can either be measurement
 * data or fault code data. Note: Diagnostics cannot be added, set or removed via the
 * API.<br>
 */
export interface IDiagnostic extends Partial<INameEntityWithVersion> {
  /** Gets or sets the diagnostic parameter code number. */
  code?: number;
  /** Gets or sets the applicable {@link IController} for the diagnostic parameter. */
  controller?: IController;
  /** Gets or sets the {@link IDiagnosticType} (source) of the diagnostic parameter. */
  diagnosticType?: DiagnosticType;
  /**
   * Gets or sets the {@link IEngineType} for this diagnostic if applicable, otherwise
   * null.
   */
  engineType?: IEngineType;
  /**
   * Gets or sets the {@link IFaultResetMode} of the diagnostic (whether the fault resets
   * automatically or manually).
   */
  faultResetMode?: FaultResetMode;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id?: string;
  /**
   * Gets or sets the value which describes if the diagnostic guarantees it will log
   * when estimate error is exceeded.
   */
  isLogGuaranteedOnEstimateError?: boolean;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name?: string;
  /** Gets or sets the {@link ISource} for the diagnostic (the type of diagnostic code). */
  source?: ISource;
  /** Gets the tampering diagnostic codes. */
  tamperingDiagnostics: IDiagnostic[];
  /** Gets or sets the {@link IUnitOfMeasure} applicable to the diagnostic parameter. */
  unitOfMeasure?: IUnitOfMeasure;
  /**
   * Gets or sets the . The diagnostic should only be interpolated within the range of
   * the given type.
   */
  validLoggingPeriod?: ValidLoggingPeriod;
}
