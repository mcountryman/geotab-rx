/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from "../name_entity_with_version";
import { ExceptionRuleBaseType } from "../exceptions/exception_rule_base_type";
import { ICondition } from "../exceptions/condition";
import { IGroup } from "../group";

/**
 *  A rule is the definition of conditions that, when "violated", will generate an
 * {@link IExceptionEvent}. The rule's logic is defined by it's tree of {@link ICondition}
 * (s). It's condition tree will be evaluated against data for device(s) that are members
 * of the rule's assigned group(s) or the device(s)/driver(s) defined in the rule condition
 * tree. The conditions will be evaluated independently against the assets in the selected
 * groups.
 */
export interface IRule extends INameEntityWithVersion {
  /**
   * Gets or sets start date of the Rule's notification activity period. The events with
   * earlier date than this date will not be reported through the notification engine.
   */
  activeFrom?: Date;
  /** Gets or sets end date of the Rule's notification activity period. */
  activeTo?: Date;
  /**
   * Gets or sets the {@link IExceptionRuleBaseType} of the rule; either Custom, Stock
   * or ZoneStop.
   */
  baseType?: ExceptionRuleBaseType;
  /**
   * Gets or sets the {@link IColor} associated with this rule. Used when rendering {@link
   * IExceptionEvent}(s) related to this rule. Color is defined by the parameters "Red",
   * "Green" and "Blue".
   */
  color: any;
  /**
   * Gets or sets free text field where any user information can be stored and referenced
   * for this entity.
   */
  comment: string;
  /**
   * Gets or sets the hierarchical tree of {@link ICondition}(s) defining the logic of
   * a rule. A rule should have one or more conditions in it's tree.
   */
  condition: ICondition;
  /**
   * Gets or sets a list of {@link IGroup}(s) assigned to the rule. Device in these groups
   * will have the rule evaluated against their data. Device conditions will override
   * devices in the assigned groups.
   */
  groups: IGroup[];
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
   * Gets or sets the name of the rule entity that uniquely identifies it and is used
   * when displaying this entity.
   */
  name: string;
}
