import type { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IDevice } from "./models/device";
import { IDeviceSearch } from "./models/device_search";
import { IExceptionEvent } from "./models/exceptions/exception_event";
import { IExceptionEventSearch } from "./models/exceptions/exception_event_search";
import { IUser } from "./models/user";
import { IUserSearch } from "./models/user_search";
import { Repo } from "./repository/types";
import { IRpcClientOpts, RpcClient } from "./rpc/client";

export const PATHED_END_POINT = "https://{{path}}/apiv1";
export const DEFAULT_END_POINT = "https://my.geotab.com/apiv1";

export interface IGeotabOpts
  extends Omit<IRpcClientOpts, "endPoint" | "credentials"> {
  pollIntervalMs?: number;
}
export class Geotab extends RpcClient {
  public getIsAuthenticated(): boolean {
    return this.credentials$.getValue() !== undefined;
  }

  public getIsAuthenticated$(): Observable<boolean> {
    return this.credentials$.pipe(map((value) => !!value));
  }

  readonly users = new Repo<IUser, IUserSearch>(this, "User");
  readonly devices = new Repo<IDevice, IDeviceSearch>(this, "Device");
  readonly events = new Repo<IExceptionEvent, IExceptionEventSearch>(
    this,
    "ExceptionEvent"
  );

  constructor(opts: IGeotabOpts = {}) {
    super({ ...opts, endPoint: DEFAULT_END_POINT });

    if (opts.pollIntervalMs) {
      // this._pollInterval$.next(opts.pollIntervalMs);
    }
  }
}
