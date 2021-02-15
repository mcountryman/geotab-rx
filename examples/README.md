# geotab-rx examples

Example sub-project is a single CLI app with multiple sub commands. Help docs can be
displayed by running `yarn start --help`.

### [Am I assigned to vehicle](src/am_i_assigned_to_vehicle.ts)

Displays whether or not the current user is assigned to vehicle.

```shell
$ yarn start -u $GEOTAB_USERNAME -p $GEOTAB_PASSWORD am-i-assigned-to-vehicle --licensePlate $LICENSE_PLATE

> Someone else is assigned to device '...'
or
> No-one is assigned to device '...'
or
> You are assigned to device '...'
```

### [Log 100 drivers](src/log_100_drivers.ts)

Displays first 100 drivers in database.

```shell
$ yarn start -u $GEOTAB_USERNAME -p $GEOTAB_PASSWORD log-100-drivers

> Found driver '...'
> Found driver '...'
> Found driver '...'
```
