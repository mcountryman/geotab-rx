/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * The IncludeGroups enum provides a method of querying for entities relative to the
 * entity's position in the hierarchy of (s). Some entity types (such as (s)) have
 * implications to entities in their child groups. For example; on a map, it may be
 * useful to include (s) that are above the user's data scope groups. These (s) will
 * also apply to vehicles that are at or below the selected (s) of the .
 */
export enum IncludeGroups {
  /** Include Children groups in the query results. */
  Child = 'Child',
  /** Include Parent groups in the query results. */
  Parent = 'Parent',
  /** Include Parent and Children groups in the query results. */
  ParentAndChild = 'ParentAndChild',
  /** Directly related groups only in the query results. */
  Direct = 'Direct',
}
