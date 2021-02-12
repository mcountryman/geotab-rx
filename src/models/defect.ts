/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGroup } from './group';
import { DefectSeverity } from './defect_severity';
import { DefectAssetType } from './defect_asset_type';

/**
 *  Represents a Defect entity. This defines the one to one relationship between a
 * and .
 */
export interface IDefect extends IGroup {
  /** Gets or sets the of the defect. */
  assetType?: DefectAssetType;
  /** Gets or sets the color used to render assets belonging to this defect. */
  color: any;
  /** Gets or sets the list of Defect groups. */
  groups: IGroup[];
  /** Gets a value indicating whether this is a list of defects. */
  isDefectList: boolean;
  /** Gets or sets the of the Defect. */
  severity?: DefectSeverity;
}
