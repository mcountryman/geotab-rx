/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISource } from '../engine/source';

/** Specifies that the data originated from the AI Model. */
export interface ISourceAiModel extends ISource {
  /** Gets the singleton value. */
  value: ISourceAiModel;
}
