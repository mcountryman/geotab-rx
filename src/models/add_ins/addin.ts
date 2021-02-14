/* eslint-disable @typescript-eslint/no-empty-interface */
import { ICustomSecurityIdDefinition } from "../add_ins/custom_security_id_definition";

/** Represents populated MyGeotab addin. */
export interface IAddin {
  /**
   * Gets or sets a value indicating whether addin is going to setup the securityIds
   * for viewing support.
   */
  enableViewSecurityId: boolean;
  /** Gets or sets the add-in files. */
  files: any;
  /** Gets or sets if the install callback URL. */
  installCallbackUrl: string;
  /** Gets or sets a value indicating whether the add-in is signed. */
  isSigned: boolean;
  /** Gets or sets the add-in items. */
  items: any[];
  /** Gets or sets the add-in key. */
  key: string;
  /** Gets or sets addi-n name. */
  name: string;
  /**
   * Gets or sets a value indicating whether addin is executed upon log out within the
   * Drive App
   */
  onShutdown: boolean;
  /**
   * Gets or sets a value indicating whether addin is executed initially on start up
   * within the Drive App
   */
  onStartup: boolean;
  /** Gets or sets addin SecurityIds */
  securityIds: ICustomSecurityIdDefinition[];
  /** Gets or sets the add-in signature. */
  signature: string;
  /** Gets or sets add-in ID. */
  solutionId: string;
  /** Gets or sets the support email. */
  supportEmail: string;
  /** Gets or sets if the add-in uninstall callback URL. */
  uninstallCallbackUrl: string;
  /** Gets or sets the add-in version. */
  version: string;
}
