/* eslint-disable @typescript-eslint/no-empty-interface */
import { IExceptionEvent } from '../../../../geotab/checkmate/object_model/exceptions/i_exception_event';



/** A exception event that represents DBNull database value. */
export interface INoExceptionEvent extends IExceptionEvent
{
  /**
  * @inheritdoc
  */
  id: string;
}
