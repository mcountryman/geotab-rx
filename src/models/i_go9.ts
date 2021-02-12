/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGoCurveAuxiliary } from './go_curve_auxiliary';

/** The Geotab GO9 device. Additional properties can be seen in . */
export interface IGo9 extends IGoCurveAuxiliary {
  /**
   * Gets or sets value which enables or disables OBD alerts for the device. Default
   * [False].
   */
  obdAlertEnabled?: boolean;
}
