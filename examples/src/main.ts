import { run, subcommands } from "cmd-ts";
import { version } from "../package.json";
import { log100Drivers } from "./cmds/log_100_drivers";
import { amIAssignedToVehicle } from "./cmds/am_i_assigned_to_vehicle";

run(
  subcommands({
    name: "examples",
    version,
    cmds: { amIAssignedToVehicle, log100Drivers },
  }),
  process.argv.slice(2)
);
