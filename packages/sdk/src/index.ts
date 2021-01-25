import {
  ICredentials,
  IDevice,
  IDeviceSearch,
  ILoginResult,
  IUser,
  IUserSearch,
} from "@geotab/mygeotab";
import { Subject, merge, BehaviorSubject } from "rxjs";
import { map, multicast, publish } from "rxjs/operators";
import { Repo } from "./repository";
import { RpcClient } from "./rpc/client";

export const PATHED_END_POINT = "https://{{path}}/apiv1";
export const DEFAULT_END_POINT = "https://my.geotab.com/apiv1";
export class Geotab {
  public get isAuthenticated(): boolean {
    return false;
  }

  readonly users = new Repo<IUser, IUserSearch>(this.client, "User");
  readonly devices = new Repo<IDevice, IDeviceSearch>(this.client, "Device");

  constructor(readonly client = new RpcClient(DEFAULT_END_POINT)) {
    this._endPoint.subscribe((endPoint) => (client.endPoint = endPoint));
  }

  async authenticate(userName: string, password?: string): Promise<void>;
  async authenticate(
    userName: string,
    password?: string,
    database?: string
  ): Promise<void> {
    //
    this.client
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

  private readonly _endPoint = new BehaviorSubject(DEFAULT_END_POINT);
}
