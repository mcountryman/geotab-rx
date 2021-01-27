/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGoCurveAuxiliary } from '../../../geotab/checkmate/object_model/i_go_curve_auxiliary';



/** A Geotab GO4V3 device. Additional properties can be seen in {@link IGoCurveAuxiliary}. */
export interface IGo4v3 extends IGoCurveAuxiliary
{
  /** Gets or sets the radio channels as an array of 20 bytes. [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]. */
  channel?: number[];
  /** Gets or sets the channel count. Default [1]. */
  channelCount?: number;
  /**
  * Gets or sets the FrequencyOffset used on the device radio. The default is 1 and
  * should not be changed. Only has an effect on Channel Set 0 - which consists of channels
  * 0 to 15. Default [1].
  */
  frequencyOffset?: number;
  /**
  * Gets or sets a value indicating whether this device has aided GPS enabled. This
  * feature only applies to devices that use RF communication in very large installations
  * where an aiding data server has been configured. Default [false].
  */
  isAidedGpsEnabled?: boolean;
  /** Gets or sets the toggle to enable RF upload while driving. Default [false]. */
  isRfUploadOnWhenMoving?: boolean;
  /** Gets or sets the RF parameter version. Default [0]. */
  rfParameterVersion?: number;
}
