/* eslint-disable @typescript-eslint/no-empty-interface */
import { IStatusData } from '../../../../geotab/checkmate/object_model/engine/i_status_data';
import { IFillUpExtremum } from '../../../../geotab/checkmate/object_model/fuel/i_fill_up_extremum';



/** Represents the extrema (minima/maxima) from a set of {@link IStatusData} values. */
export interface IFillUpExtrema
{
  /** Gets the maxima value. */
  maxima: IStatusData;
  /** Gets or sets the maxima fuel data point for the fill up event */
  maximaPoint?: IFillUpExtremum;
  /** Gets the minima value. */
  minima: IStatusData;
  /** Gets or sets the minima fuel data point for the fill up event. */
  minimaPoint?: IFillUpExtremum;
}
