/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataToComponentContent } from './data_to_component_content';
import { IKey } from './key';

/** Message content to control a {@link IDriver} white list. */
export interface IDriverWhiteListContent extends IDataToComponentContent {
  /**
   * Gets a value indicating whether to add to or remove from the white list. If [true]
   * "ClearWhiteList" will be set to [false] and the driver will be added to the white
   * list. If [false] the driver will be removed from the white list.
   */
  addToWhiteList: boolean;
  /**
   * Gets a value indicating whether to clear the white list. If [true] "AddToWhiteList"
   * will be set to [false] and "DriverKey" will be set to [null].
   */
  clearWhiteList: boolean;
  /** Gets the {@link IKey}. */
  driverKey: IKey;
}
