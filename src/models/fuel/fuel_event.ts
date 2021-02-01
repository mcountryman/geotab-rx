/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from "../entity_with_version";
import { FuelTransactionProductType } from "../fuel/fuel_transaction_product_type";

/** Log of fueling events. */
export interface IFuelEvent extends IEntityWithVersion {
  /** Gets or sets the cost of the fuel transaction. Default [0]. */
  cost?: number;
  /**
   * Gets or sets the three digit ISO 427 currency code (http://www.xe.com/iso4217.php).
   * Default ["USD"].
   */
  currencyCode: string;
  /** Gets or sets the UTC date and time of the transaction. */
  dateTime?: Date;
  /** Gets or sets the {@link ICoordinate} of the transaction retailer. Default [0,0]. */
  location: any;
  /** Gets or sets the driver recorded odometer reading in km. Default [0]. */
  odometer?: number;
  /**
   * Gets or sets the {@link IFuelTransactionProductType} of this transaction. Default
   * [Unknown].
   */
  productType?: FuelTransactionProductType;
  /** Gets or sets the volume of fuel purchased in Liters. Default [0]. */
  volume?: number;
}
