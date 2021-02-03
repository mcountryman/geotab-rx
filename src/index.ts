import { BehaviorSubject } from "rxjs";
import { map, multicast, publish } from "rxjs/operators";
import { IDevice } from "./models/device";
import { IDeviceSearch } from "./models/device_search";
import { ILoginResult } from "./models/login_result";
import { IUser } from "./models/user";
import { IUserSearch } from "./models/user_search";
import { Repo } from "./repository";
import { RpcClient } from "./rpc/client";

export * from "./rpc";
export * from "./types";
export * from "./repository";

export const PATHED_END_POINT = "https://{{path}}/apiv1";
export const DEFAULT_END_POINT = "https://my.geotab.com/apiv1";
export class Geotab {
  public get isAuthenticated(): boolean {
    return false;
  }

  readonly users = new Repo<IUser, IUserSearch>(this._client, "User");
  readonly devices = new Repo<IDevice, IDeviceSearch>(this._client, "Device");

  constructor(
    private readonly _client = new RpcClient({ endPoint: DEFAULT_END_POINT }),
    private readonly _endPoint = new BehaviorSubject<string>(DEFAULT_END_POINT)
  ) {
    this._endPoint.subscribe((endPoint) => (_client.endPoint = endPoint));
  }

  async authenticate(userName: string, password?: string): Promise<void>;
  async authenticate(
    userName: string,
    password?: string,
    database?: string
  ): Promise<void> {
    //
    this._client
      .call<ILoginResult>("Authenticate", {
        userName,
        password,
        database,
      })
      .pipe(
        publish((multi$) =>
          multi$.pipe(
            map((result) =>
              result.path === "ThisServer"
                ? this._endPoint.getValue()
                : PATHED_END_POINT.replace("{{path}}", result.path)
            ),
            multicast(this._endPoint)
          )
        )
      );
  }
}
