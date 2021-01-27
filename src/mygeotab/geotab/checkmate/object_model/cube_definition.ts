/* eslint-disable @typescript-eslint/no-empty-interface */
import { CubeType } from '../../../geotab/checkmate/object_model/cube_type';



/** Contains the dimension columns of the cube along with its type */
export interface ICubeDefinition
{
  /** Gets or sets the CubeType  */
  cubeType: CubeType;
  /** Gets or sets the dimension columns */
  dimensions: string[];
}
