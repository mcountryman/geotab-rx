/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IDutyStatusAvailability } from '../../../geotab/checkmate/object_model/i_duty_status_availability';
import { IUser } from '../../../geotab/checkmate/object_model/i_user';
import { IDutyStatusViolation } from '../../../geotab/checkmate/object_model/i_duty_status_violation';
import { IDaySummary } from '../../../geotab/checkmate/object_model/i_day_summary';
import { IWorkdaySummary } from '../../../geotab/checkmate/object_model/i_workday_summary';
import { ICycleSummary } from '../../../geotab/checkmate/object_model/i_cycle_summary';
import { IUserHosRuleSet } from '../../../geotab/checkmate/object_model/i_user_hos_rule_set';



/** Detailed information for Hours of Service regulation for a driver. */
export interface IDriverRegulation extends IEntity
{
  /** Gets or sets the {@link IDutyStatusAvailability}. */
  availability: IDutyStatusAvailability;
  /** Gets or sets the cycle summaries. */
  cycleSummaries: ICycleSummary[];
  /** Gets or sets the day summaries. */
  daySummaries: IDaySummary[];
  /** Gets or sets the . */
  driver: IUser;
  /** Gets or sets when off duty is needed. */
  offDutyNeeded: Date;
  /** Gets or sets when rest break is needed. */
  restBreakNeeded: Date;
  /** Gets or sets rulesets that cannot be changed currently. */
  rulesetsThatCannotChange: IUserHosRuleSet[];
  /** Gets or sets the {@link IDutyStatusViolation}. */
  violations: IDutyStatusViolation[];
  /** Gets or sets the workday summaries. */
  workdaySummaries: IWorkdaySummary[];
}
