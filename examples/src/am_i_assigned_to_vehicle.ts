import { Geotab } from "geotab-rx";
import { authenticate } from "geotab-rx/authenticate";
import { IDevice } from "geotab-rx/models/device";
import { IUser } from "geotab-rx/models/user";
import { find } from "geotab-rx/repository";
import { forkJoin, from, Observable, of } from "rxjs";
import { first, map, mergeMap, take, tap, toArray } from "rxjs/operators";
import { Arguments, Argv, CommandModule } from "yargs";

const WEEK_MS = 1000 * 60 * 60 * 24 * 7;

interface IOpts {
  username: string;
  password: string;
}

export const amIAssignedToVehicleCommand: CommandModule = {
  command: "am-i-assigned-to-vehicle",
  builder: (yargs: Argv<IOpts>) =>
    yargs.option("licensePlate", {
      alias: "l",
      describe: "The license plate of vehicle to check",
    }),
  handler: (argv: Arguments<IOpts>) => {
    const geotab = new Geotab();

    authenticate(geotab, {
      username: argv.username,
      password: argv.password,
    })
      .pipe(
        tap({ error: (err) => console.error("Failed to login", err) }),
        withUserAndDevice(geotab, argv.username, argv["licensePlate"] as string),
        andWithLatestDriverChange(geotab),
        tap(({ user, device, change }) =>
          change.driver.id === "UnknownDriverId"
            ? console.log(`No-one is assigned to device '${device.name}'`)
            : change.driver.id === user.id
            ? console.log(`You are assigned to device '${device.name}'`)
            : console.log(`Someone else is assigned to device '${device.name}'`)
        )
      )
      .subscribe();
  },
};

function withUserAndDevice(geotab: Geotab, username: string, licensePlate: string) {
  return (in$: Observable<any>) =>
    in$.pipe(
      mergeMap((_) =>
        forkJoin({
          user: find(geotab.users, { email: username }).pipe(take(1)),
          device: find(geotab.devices, {
            licensePlate: licensePlate,
          }).pipe(take(1)),
        })
      ),
      tap({
        error: () => console.error("Failed to find user, or device"),
      })
    );
}

function andWithLatestDriverChange(geotab: Geotab) {
  return (in$: Observable<{ user: IUser; device: IDevice }>) =>
    in$.pipe(
      mergeMap(({ user, device }) =>
        forkJoin({
          user: of(user),
          device: of(device),
          change: find(geotab.driverChanges, {
            fromDate: new Date(Date.now() - WEEK_MS),
            deviceSearch: { id: device.id },
            includeOverlappedChanges: true,
          }).pipe(
            tap({
              error: (Î) => console.error("Failed to find driver changes"),
            }),
            toArray(),
            map((changes) =>
              changes.sort(
                (a, b) => Date.parse(a.dateTime as any) - Date.parse(b.dateTime as any)
              )
            ),
            mergeMap((changes) => from(changes)),
            first()
          ),
        })
      )
    );
}
