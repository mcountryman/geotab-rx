import { Geotab } from "geotab-rx";
import { authenticate } from "geotab-rx/authenticate";
import { IDevice } from "geotab-rx/models/device";
import { IUser } from "geotab-rx/models/user";
import { find } from "geotab-rx/repository";
import { forkJoin, from, Observable, of } from "rxjs";
import { first, last, map, mergeMap, take, tap, toArray } from "rxjs/operators";
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
        tap({ error: console.error }),
        withUserAndDevice(geotab, argv.username, argv["licensePlate"] as string),
        withLatestDriverChange(geotab),
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
          user: find(geotab.users, { name: username }).pipe(take(1)),
          device: find(geotab.devices, {
            licensePlate: licensePlate,
          }).pipe(take(1)),
        })
      ),
      tap({
        error: (err) => console.error(`Failed to find user, or device`, err),
      })
    );
}

function withLatestDriverChange(geotab: Geotab) {
  return (in$: Observable<{ user: IUser; device: IDevice }>) =>
    in$.pipe(
      mergeMap(({ user, device }) =>
        forkJoin({
          user: of(user),
          device: of(device),
          change: find(geotab.driverChanges, {
            fromDate: new Date(Date.now() - WEEK_MS),
            deviceSearch: device.id,
            includeOverlappedChanges: true,
          }).pipe(
            toArray(),
            map((changes) =>
              changes.sort((a, b) => a.dateTime?.getDate() - b.dateTime?.getDate())
            ),
            mergeMap((changes) => from(changes)),
            first()
          ),
        })
      )
    );
}
