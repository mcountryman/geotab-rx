import { Observable } from "rxjs";
import { first, map, tap } from "rxjs/operators";
import { ICredentials } from "./models/credentials";
import { ILoginResult } from "./models/login_result";
import { IRpcClient } from "./rpc";

const PATHED_END_POINT = "https://{{path}}/apiv1";

export interface IAuthenticateOpts {
  username: string;
  password?: string;
  database?: string;
  sessionId?: string;
}

export interface IAuthenticateResult {
  endPoint: string;
  credentials: ICredentials;
}

export function authenticate(
  client: IRpcClient,
  opts: IAuthenticateOpts
): Observable<IAuthenticateResult> {
  const credentials = optsToCredentials(opts);
  return client.call<ILoginResult>("Authenticate", credentials).pipe(
    map((result) => ({
      endPoint:
        result.path !== "ThisServer"
          ? PATHED_END_POINT.replace("{{path}}", result.path)
          : client.endPoint,
      credentials: result.credentials,
    })),
    tap((result) => {
      client.endPoint = result.endPoint;
      client.credentials = result.credentials;
    })
  );
}

export function optsToCredentials({
  username,
  password,
  database,
  sessionId,
}: IAuthenticateOpts): Partial<ICredentials> {
  // TODO: Implement validation?

  return {
    userName: username,
    password,
    database,
    sessionId,
  };
}
