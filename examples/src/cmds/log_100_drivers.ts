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
  description: "",
  handler: (args) => {
    const geotab = new Geotab();

    authenticate(geotab, {
      username: args.username,
      password: args.password,
    })
      .pipe(
        tap({ error: (err) => console.error("Failed to login", err) }),
        switchMap((_) =>
          find(geotab.users, {
            limit: 100,
            isDriver: true,
          })
        )
      )
      .subscribe((driver) => console.log(`Found driver '${driver.firstName}'!`));
  },
});
