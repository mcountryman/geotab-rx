/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGenericTicket } from "../direct_support/generic_ticket";

/** A training ticket. */
export interface ITrainingTicket extends IGenericTicket {
  /** Gets or sets other training interest. */
  otherTrainingInterest: string;
  /** Gets or sets training duration (e.g. 30min, 1h). */
  trainingLength: string;
  /** Gets or sets training user company. */
  trainingRecipientCompany: string;
  /** Gets or sets user email. */
  trainingRecipientEmail: string;
  /** Gets or sets user name. */
  trainingRecipientName: string;
  /** Gets or sets phone number. */
  trainingRecipientPhoneNumber: string;
  /** Gets or sets training time zone. */
  trainingRecipientTimeZone: string;
  /** Gets or sets user title. */
  trainingRecipientTitle: string;
  /** Gets or sets training type. */
  trainingType: string;
}
