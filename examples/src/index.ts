import yargs from "yargs";
import { amIAssignedToVehicleCommand } from "./am_i_assigned_to_vehicle";
import { log100Drivers } from "./log_100_drivers";

yargs(process.argv.slice(4))
  //
  .option("username", {
    type: "string",
    alias: "u",
    describe: "The username used to login into MyGeotab.",
    demandOption: true,
  })
  .option("password", {
    type: "string",
    alias: "p",
    describe: "The password used to login into MyGeotab.",
    demandOption: true,
  })
  .command(log100Drivers)
  .command(amIAssignedToVehicleCommand)
  // .demandCommand(1, "Need at least 1 subcommand. Use --help flag for details.")
  .help().argv;
