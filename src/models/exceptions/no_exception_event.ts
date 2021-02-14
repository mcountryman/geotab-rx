/* eslint-disable @typescript-eslint/no-empty-interface */
import { IExceptionEvent } from "../exceptions/exception_event";

/** A exception event that represents DBNull database value. */
export interface INoExceptionEvent extends IExceptionEvent {
  /**
   * @inheritdoc
   */
  id: string;
}
