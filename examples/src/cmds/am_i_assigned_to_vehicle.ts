import { command, option, string } from "cmd-ts";
import { Geotab } from "geotab-rx";
import { authenticate } from "geotab-rx/authenticate";
import { IDevice } from "geotab-rx/models/device";
import { IUser } from "geotab-rx/models/user";
import { find } from "geotab-rx/repository";
import { forkJoin, from, Observable, of } from "rxjs";
import { first, map, mergeMap, tap, toArray } from "rxjs/operators";
import { credentialArgs } from "../utils";

const WEEK_MS = 1000 * 60 * 60 * 24 * 7;

export const amIAssignedToVehicle = command({
  name: "am-i-assigned-to-vehicle",
  args: {
    ...credentialArgs,
    licensePlate: option({
      type: string,
      long: "licensePlate",
      short: "l",
    }),
  },
  description:
    "Determines if the logged in user is assigned to the vehicle specified " +
    "by license plate",
  handler: (args) => {
    const geotab = new Geotab();

    // Begin authenticate
    authenticate(geotab, {
      username: args.username,
      password: args.password,
    })
      .pipe(
        // Notify user of error
        tap({ error: (err) => console.error("Failed to login", err) }),
        // Switch to user and device observable
        withUserAndDevice(geotab, args.username, args.licensePlate as string),
        // Switch to latest driver change observable
        andWithLatestDriverChange(geotab),
        // Notify user of device driver status
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
});

/**
 * Attempt to find device and user with supplied licensePlate and username.  Because both
 * requests are called within the default buffer time (100ms) a single batch request will
 * be dispatched.
 *
 * @param geotab - The Geotab SDK.
 * @param username - The username of the user to find.
 * @param licensePlate - The license plate of the device to find.
 */
function withUserAndDevice(geotab: Geotab, username: string, licensePlate: string) {
  return (in$: Observable<any>) =>
    in$.pipe(
      mergeMap((_) =>
        forkJoin({
          user: find(geotab.users, { email: username }),
          device: find(geotab.devices, {
            licensePlate: licensePlate,
          }),
        })
      ),
      tap({
        error: () => console.error("Failed to find user, or device"),
      })
    );
}

/**
 * Attempt to find the latest driver change for supplied device while merging supplied
 * user and device objects into result.
 *
 * @param geotab - The Geotab SDK.
 */
function andWithLatestDriverChange(geotab: Geotab) {
  return (in$: Observable<{ user: IUser; device: IDevice }>) =>
    in$.pipe(
      mergeMap(({ user, device }) =>
        forkJoin({
          user: of(user),
          device: of(device),

          // Find all driver change records that occurred in the last week for the supplied
          // device.
          change: find(geotab.driverChanges, {
            fromDate: new Date(Date.now() - WEEK_MS),
            deviceSearch: { id: device.id },
            includeOverlappedChanges: true,
          }),
        })
      ),
      // Notify user of errors
      tap({
        error: () => console.error("Failed to find driver changes"),
      }),
      // Collect stream into array
      toArray(),
      // Sort results by driver change date in descending order
      map((changes) =>
        changes.sort((a, b) => a.change.dateTime.getDate() - b.change.dateTime.getDate())
      ),
      // Transform array of results back into observable
      mergeMap((changes) => from(changes)),
      // Take only the first driver change
      first()
    );
}
