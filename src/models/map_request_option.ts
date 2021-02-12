/* eslint-disable @typescript-eslint/no-empty-interface */

/** Defines options for a map server request. */
export enum MapRequestOption {
  /** No special options, use all available road data. */
  None = 'None',
  /** Do not use any road data that is defined as an "estimate". */
  NoEstimates = 'NoEstimates',
  /** Use community data only. */
  Community = 'Community',
  /** Use community that are not "estimates" */
  CommunityNoEstimates = 'CommunityNoEstimates',
  /** Use commercial data only. */
  Commercial = 'Commercial',
  /** Use commercial that are not "estimates" */
  CommercialNoEstimates = 'CommercialNoEstimates',
}
