/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../search';
import { FuelTransactionProvider } from '../fuel/fuel_transaction_provider';
import { IDeviceSearch } from '../device_search';

/** The object used to specify the arguments when searching for a {@link IFuelTransaction}. */
export interface IFuelTransactionSearch extends ISearch {
  /**
   * Gets or sets search for FuelTransactions for this {@link IDeviceSearch} Id. Available
   * DeviceSearch options are:. IdGroupsGroupListSearch
   */
  deviceSearch: IDeviceSearch;
  /**
   * Gets or sets search for Fuel Transactions with this External Reference. Wildcard
   * can be used by prepending/appending "%" to string. Example "%reference%".
   */
  externalReference: string;
  /**
   * Gets or sets the from date, which is used to search for FuelTransactions that occur
   * on or after this date.
   */
  fromDate?: Date;
  /**
   * Gets or sets a value indicating whether to include source data with transaction.
   * Source data can be a large string, therefore, optionally exclude it from results.
   */
  includeSourceData: boolean;
  /** Gets or sets the maximum version for which FuelTransactions should be searched. */
  maxVersion?: number;
  /** Gets or sets search by the {@link IFuelTransactionProvider}. */
  provider?: FuelTransactionProvider;
  /**
   * Gets or sets the to date, which is used to search for FuelTransactions that occur
   * on or before this date.
   */
  toDate?: Date;
  /** Gets or sets the VehicleIdentificationNumber. */
  vehicleIdentificationNumber: string;
}
