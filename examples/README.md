# geotab-rx examples

Example sub-project is a single CLI app with multiple sub commands. Help docs can be
displayed by running `yarn start --help`.

### [Am I assigned to vehicle](src/cmds/am_i_assigned_to_vehicle.ts)

Displays whether or not the current user is assigned to vehicle.

```shell
$ yarn start amIAssignedToVehicle -u $GEOTAB_USERNAME -p $GEOTAB_PASSWORD --licensePlate $LICENSE_PLATE

> Someone else is assigned to device '...'
or
> No-one is assigned to device '...'
or
> You are assigned to device '...'
```

### [Log 100 drivers](src/cmds/log_100_drivers.ts)

Displays first 100 drivers in database.

```shell
$ yarn start log100Drivers -u $GEOTAB_USERNAME -p $GEOTAB_PASSWORD

> Found driver '...'
> Found driver '...'
> Found driver '...'
```
