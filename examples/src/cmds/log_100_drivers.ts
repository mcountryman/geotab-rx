import { command } from "cmd-ts";
import { Geotab } from "geotab-rx";
import { authenticate } from "geotab-rx/authenticate";
import { find } from "geotab-rx/repository/find";
import { switchMap, tap } from "rxjs/operators";
import { credentialArgs } from "../utils";

export const log100Drivers = command({
  name: "log-100-drivers",
  args: {
    ...credentialArgs,
  },
  description: "Show at most 100 drivers in database",
  handler: (args) => {
    const geotab = new Geotab();

    // Begin authenticate
    authenticate(geotab, {
      username: args.username,
      password: args.password,
    })
      .pipe(
        // Notify user of failed login if error is thrown
        tap({ error: (err) => console.error("Failed to login", err) }),
        // Find 100 users that are drivers
        switchMap((_) =>
          find(geotab.users, {
            limit: 100,
            isDriver: true,
          })
        )
      )
      // Notify user of results
      .subscribe((driver) => console.log(`Found driver '${driver.firstName}'!`));
  },
});
