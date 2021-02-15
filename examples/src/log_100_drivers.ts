import { Geotab } from "geotab-rx";
import { authenticate } from "geotab-rx/authenticate";
import { find } from "geotab-rx/repository/find";
import { switchMap, tap } from "rxjs/operators";
import { Arguments, Argv, CommandModule } from "yargs";

interface IOpts {
  username: string;
  password: string;
}

export const log100Drivers: CommandModule = {
  command: "log-100-drivers",
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
        switchMap((_) =>
          find(geotab.users, {
            limit: 100,
            isDriver: true,
          })
        )
      )
      .subscribe((driver) => console.log(`Found driver '${driver.firstName}'!`));
  },
};
