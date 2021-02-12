/* eslint-disable @typescript-eslint/no-empty-interface */
import { IFuelEvent } from '../fuel/fuel_event';
import { IDevice } from '../device';
import { IDriver } from '../driver';
import { FuelTransactionProvider } from '../fuel/fuel_transaction_provider';

/**
 * Information from a fuel card provider representing a fuel transaction. Fuel card
 * information will be matched to a by one of these fields: vehicleIdentificationNumber,
 * serialNumber, licencePlate or comments.
 */
export interface IFuelTransaction extends IFuelEvent {
  /** Gets or sets the masked or partial purchasing card number. */
  cardNumber: string;
  /**
   * Gets or sets the free text field where any user information can be stored and referenced
   * for this entity. This can be used to associate the transaction with a . Maximum
   * length [1024] Default [""].
   */
  comments: string;
  /**
   * Gets or sets the vehicle description of the vehicle. This can be used to associate
   * the transaction with a . Maximum length [255] Default [""].
   */
  description: string;
  /** Gets or sets the {@link IDevice} the transaction belongs to. Default [null]. */
  device: IDevice;
  /** Gets or sets the {@link IDriver} the transaction belongs to. */
  driver: IDriver;
  /**
   * Gets or sets the fuel card holder name. This can be used to associate the transaction
   * with a . Maximum length [255] Default [""].
   */
  driverName: string;
  /**
   * Gets or sets the external reference to the transaction. Typically this is an external
   * identifier. Maximum length [255] Default [""].
   */
  externalReference: string;
  /**
   * Gets or sets the licence plate of the vehicle of the vehicle. This can be used to
   * associate the transaction with a . Maximum length [255] Default [""].
   */
  licencePlate: string;
  /** Gets or sets the {@link IFuelTransactionProvider} of this transaction. Default [Unknown]. */
  provider?: FuelTransactionProvider;
  /**
   * Gets or sets the serial number of the device. This can be used to associate the
   * transaction with a . Maximum length [255] Default [""].
   */
  serialNumber: string;
  /** Gets or sets the site/merchant name where the transaction took place. */
  siteName: string;
  /** Gets or sets the JSON string representing the source data. Default [""]. */
  sourceData: string;
  /**
   * Gets or sets the vehicle identification number (VIN) of the vehicle. This is used
   * to associate the transaction with a . Maximum length [255] Default [""].
   */
  vehicleIdentificationNumber: string;
}
