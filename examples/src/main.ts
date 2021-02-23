import { run, subcommands } from "cmd-ts";
import { version } from "../package.json";
import { amIAssignedToVehicle } from "./cmds/am_i_assigned_to_vehicle";
import { log100Drivers } from "./cmds/log_100_drivers";

run(
  subcommands({
    name: "examples",
    version,
    cmds: { amIAssignedToVehicle, log100Drivers },
  }),
  process.argv.slice(2)
);
