import { BehaviorSubject, interval, merge, Observable } from "rxjs";
import { first, map, multicast, publish, tap } from "rxjs/operators";
import { ICredentials } from "./models/credentials";
import { IDevice } from "./models/device";
import { IDeviceSearch } from "./models/device_search";
import { IExceptionEvent } from "./models/exceptions/exception_event";
import { IExceptionEventSearch } from "./models/exceptions/exception_event_search";
import { ILoginResult } from "./models/login_result";
import { IUser } from "./models/user";
import { IUserSearch } from "./models/user_search";
import { FeedRepo, Repo } from "./repository";
import { IRpcClientOpts, RpcClient } from "./rpc/client";

export * from "./repository";
export * from "./rpc";
export * from "./types";

export const PATHED_END_POINT = "https://{{path}}/apiv1";
export const DEFAULT_END_POINT = "https://my.geotab.com/apiv1";

export interface IGeotabOpts
  extends Omit<IRpcClientOpts, "endPoint" | "credentials"> {
  pollIntervalMs?: number;
}
export class Geotab extends RpcClient {
  public get isAuthenticated(): boolean {
    return this._isAuthenticated$.getValue();
  }

  public get isAuthenticated$(): Observable<boolean> {
    return this._isAuthenticated$.asObservable();
  }

  readonly users = new Repo<IUser, IUserSearch>(this, "User");
  readonly devices = new Repo<IDevice, IDeviceSearch>(this, "Device");
  readonly events = new FeedRepo<IExceptionEvent, IExceptionEventSearch>(
    interval(1000),
    this,
    "ExceptionEvent"
  );

  constructor(opts: IGeotabOpts) {
    super({ ...opts, endPoint: DEFAULT_END_POINT });

    // this._interval$ = new BehaviorSubject(opts.pollIntervalMs ?? 1000);
    this._isAuthenticated$ = new BehaviorSubject<boolean>(false);
  }

  async authenticate(
    userName: string,
    password?: string
  ): Promise<ILoginResult>;
  async authenticate(
    userName: string,
    password?: string,
    database?: string
  ): Promise<ILoginResult> {
    return this.call<ILoginResult>("Authenticate", {
      userName,
      password,
      database,
    })
      .pipe(
        tap((result) => {
          if (result.path !== "ThisServer") {
            this.endPoint$.next(
              PATHED_END_POINT.replace("{{path}}", result.path)
            );
          }

          this.credentials$.next(result.credentials);
          this._isAuthenticated$.next(true);
        }),
        first()
      )
      .toPromise();
  }

  private readonly _isAuthenticated$: BehaviorSubject<boolean>;
}
