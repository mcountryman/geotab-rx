/* eslint-disable @typescript-eslint/no-empty-interface */

/** Search the groups */
export enum GroupSearchRelation {
  /** Must belong to all the groups */
  And = 'And',
  /** Belongs to any of the groups */
  Or = 'Or',
}
