/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IGroupSearch } from '../../../geotab/checkmate/object_model/i_group_search';
import { UserAuthenticationType } from '../../../geotab/checkmate/object_model/user_authentication_type';



/** The object used to specify the arguments when searching for a {@link IDriver}. */
export interface IUserSearch extends ISearch
{
  /** Gets or sets search for Users who are associated with this {@link IUserAuthenticationType}. */
  authenticationType?: UserAuthenticationType;
  /**
  * Gets or sets search for Users who are a member of this . Available GroupSearch options
  * are:. IdCannot be used with DriverGroups.
  */
  companyGroups: IGroupSearch[];
  /**
  * Gets or sets search for Users who are assigned a Driver Key which is a member of
  * the {@link IGroupSearch}. Available GroupSearch options are:. IdCannot be used with
  * CompanyGroups.
  */
  driverGroups: IGroupSearch[];
  /**
  * Gets or sets search for a User who is associated with this Driver Employee Number.
  * Wildcard can be used by prepending/appending "%" to string. Example "%EmployeeNumber%".
  * This property is negatable. If the first character of this search property is '!',
  * then the API will know to negate the search logic. (e.g. field = "!EmployeeNumber%",
  * is equivalent to: WHERE NOT LIKE 'EmployeeNumber%')
  */
  employeeNumber: string;
  /**
  * Gets or sets search for Users with this first name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%firstName%". This property is negatable. If the first character
  * of this search property is '!', then the API will know to negate the search logic.
  * (e.g. field = "!John%", is equivalent to: WHERE NOT LIKE 'John%')
  */
  firstName: string;
  /**
  * Gets or sets search for Users that were active at this date or after. Set to UTC
  * now to search for only currently active (non-archived) users.
  */
  fromDate?: Date;
  /** Gets or sets search for Users who are associated with this {@link IHosRuleSet}. */
  hosRuleSet?: number;
  /** Gets or sets only search for Users who have a Driver Key assigned. */
  isDriver?: boolean;
  /** Gets or sets search for a User who is associated with this Driver Key Id. */
  keyId?: number;
  /**
  * Gets or sets search for entities that contain specific keywords in all wildcard
  * string-searchable fields.
  */
  keywords: string[];
  /**
  * Gets or sets search for Users with this last name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%lastName%". This property is negatable. If the first character
  * of this search property is '!', then the API will know to negate the search logic.
  * (e.g. field = "!John%", is equivalent to: WHERE NOT LIKE 'John%')
  */
  lastName: string;
  /**
  * Gets or sets search for a User who is associated with this Driver License Number.
  * Wildcard can be used by prepending/appending "%" to string. Example "%LicenseNumber%".
  * This property is negatable. If the first character of this search property is '!',
  * then the API will know to negate the search logic. (e.g. field = "!LicenseNumber%",
  * is equivalent to: WHERE NOT LIKE 'LicenseNumber%')
  */
  licenseNumber: string;
  /**
  * Gets or sets search for Users with this email/log-on name. Wildcard can be used
  * by prepending/appending "%" to string. Example "%name%". This property is negatable.
  * If the first character of this search property is '!', then the API will know to
  * negate the search logic. (e.g. field = "!John%", is equivalent to: WHERE NOT LIKE
  * 'John%')
  */
  name: string;
  /**
  * Gets or sets search for Users who are assigned to a specific Security Clearance
  * which is a member of the {@link IGroupSearch}. Available GroupSearch options are:.
  * Id
  */
  securityGroups: IGroupSearch[];
  /** Gets or sets search for a User who is associated with this Driver Serial Number. */
  serialNumber: string;
  /** Gets or sets search for Users that were active at this date or before. */
  toDate?: Date;
}
