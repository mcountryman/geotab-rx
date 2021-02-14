/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "../entity";
import { ConditionType } from "../exceptions/condition_type";
import { IRule } from "../exceptions/rule";
import { IDevice } from "../device";
import { IDiagnostic } from "../engine/diagnostic";
import { IDriver } from "../driver";
import { IWorkTime } from "../work_time";
import { IZone } from "../zone";
import { IZoneType } from "../zone_type";

/**
 *  Conditions model the logic that govern a {@link IConditionType}) defines the meaning
 * of each condition in the tree and can be an operator, special operator, data or
 * an asset.<br> Depending on the type of condition, it can have a minimum of 0 and
 * maximum of 1 entity properties (Device, Driver, Diagnostic, WorkTime, Zone or ZoneType)
 * defined per condition. Operator conditions (OR, AND, &gt;, &lt;, ==, NOT) will not
 * have any entity properties populated. Special Operator conditions evaluate against
 * special types of data such as Aux data, Zones, WorkHours, etc. and may have the
 * entity property populated and/or a child condition populated with a Data condition.
 * Asset conditions will only have the asset entity property populated.<br> The unit
 * of measure for data is described either by the related {@link IUnitOfMeasure} or
 * as follows:<br> Distance: Meters (m)<br> Speed: Kilometers Per Hour (km/h)<br> Duration:
 * Seconds<br> A tree of conditions can define simple or complex rules and can be very
 * powerful. Please take into consideration all possible consequences of a series of
 * rules. Overly complex, poorly written or an excessive number of rules can have undesirable
 * performance effects.<br> This class is in development. Its public interface is a
 * subject to change.
 */
export interface ICondition extends IEntity {
  /** Gets or sets child condition(s) of this condition. */
  children: ICondition[];
  /** Gets or sets the {@link IConditionType} defines the meaning of this condition. */
  conditionType?: ConditionType;
  /** Gets or sets specified {@link IDevice} associated with the condition. */
  device: IDevice;
  /** Gets or sets the {@link IDiagnostic} to compare the value of. */
  diagnostic: IDiagnostic;
  /** Gets or sets specified {@link IDriver} associated with the condition. */
  driver: IDriver;
  /** Gets or sets the Condition that this Condition is a link of. */
  linkTarget: ICondition;
  /** Gets or sets the parent Condition for this Condition. Null for root condition. */
  parent: ICondition;
  /** Gets or sets the {@link IRule} that this condition applies to. */
  rule: IRule;
  /** Gets or sets the sequence that defines the {@link ICondition}. */
  sequence?: number;
  /** Gets the name of the metric used. */
  unit: string;
  /** Gets or sets the specified value to evaluate against. */
  value?: number;
  /**
   * Gets or sets the {@link IWorkTime} that the event must occur inside/outside of for
   * the violation to occur.
   */
  workTime: IWorkTime;
  /** Gets or sets specified {@link IZone} associated with the condition. */
  zone: IZone;
  /** Gets or sets specified {@link IZoneType}. */
  zoneType: IZoneType;
}
