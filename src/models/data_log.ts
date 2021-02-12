/* eslint-disable @typescript-eslint/no-empty-interface */
import { ILogRecordInterpolated } from './log_record_interpolated';

/**
 * Represents an estimate location for any data implementing interface based on previous/next
 * {@link ILogRecord} and the &lt;see cref="DateTime}.
 */
export interface IDataLog extends ILogRecordInterpolated {}
