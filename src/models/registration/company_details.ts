/* eslint-disable @typescript-eslint/no-empty-interface */
import { RequireTraining } from "../registration/require_training";

/** Company details for registration. */
export interface ICompanyDetails {
  /** Gets or sets free text field. Maximum length [1000]. */
  comments: string;
  /** Gets or sets the company name. Maximum length [256]. */
  companyName?: string;
  /**
   * Gets or sets the account administrator's first name. Maximum length [100] is shared
   * between FirstName, one added space, and LastName.
   */
  firstName?: string;
  /** Gets or sets the number of vehicles in the company fleet. */
  fleetSize?: number;
  /** Gets the account administrator's first and last name. */
  fullName: string;
  /** Gets or sets the company industry guid the same as SystemSettings Industry property. */
  industry?: any;
  /**
   * Gets or sets the account administrator's last name. Maximum length [100] is shared
   * between FirstName, one added space, and LastName.
   */
  lastName: string;
  /** Gets or sets the company phone number. Maximum length [50]. */
  phoneNumber: string;
  /** Gets or sets the registration domain name where database is created. */
  registrationDomain: string;
  /** Gets or sets whether administrator required training or not. */
  requireTraining?: RequireTraining;
  /** Gets or sets the reseller name. Maximum length [50]. */
  resellerName: string;
  /**
   * Gets or sets a value indicating whether sign-up to receive news about new telematics
   * products, events and promotions.
   */
  signUpForNews: boolean;
  /**
   * Gets or sets the IANA time zone Id of the device used to determine local work times.
   * This is typically the "home location" of the admin user.
   */
  timeZoneId?: string;
}
