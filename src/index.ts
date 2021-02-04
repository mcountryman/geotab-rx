import { BehaviorSubject, interval, Observable } from "rxjs";
import { first, share, switchMap, tap } from "rxjs/operators";
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

  public get poll$(): Observable<number> {
    return this._poll$;
  }

  readonly users = new Repo<IUser, IUserSearch>(this, "User");
  readonly devices = new Repo<IDevice, IDeviceSearch>(this, "Device");
  readonly events = new FeedRepo<IExceptionEvent, IExceptionEventSearch>(
    this,
    "ExceptionEvent"
  );

  constructor(opts: IGeotabOpts = {}) {
    super({ ...opts, endPoint: DEFAULT_END_POINT });

    if (opts.pollIntervalMs) {
      // this._pollInterval$.next(opts.pollIntervalMs);
    }
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

  private readonly _pollInterval$ = new BehaviorSubject(1000);
  private readonly _isAuthenticated$ = new BehaviorSubject<boolean>(false);

  private readonly _poll$ = this._pollInterval$.pipe(
    switchMap((timeSpan) => interval(timeSpan)),
  );
}
