/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";

/** An object used to search for {@link ICertificate}s. */
export interface ICertificateSearch extends ISearch {
  /**
   * Gets or sets the boolean indicating if {@link ICertificate} is root, used for searching
   * the root certificate.
   */
  isRoot?: boolean;
  /** Gets or sets the issuer of the {@link ICertificate}. */
  issuer: string;
}
