<h1 align="center">geotab-rx</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/geotab-rx">
    <img alt="npm" src="https://img.shields.io/npm/v/geotab-rx?style=flat-square">
  </a>
  <a href="https://bundlephobia.com/result?p=geotab-rx">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/geotab-rx?style=flat-square">
  </a>
  <a href="https://github.com/mcountryman/geotab-rx/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/mcountryman/geotab-rx?style=flat-square">
  </a>
  <a href="">
    <img alt="coveralls github" src="https://img.shields.io/coveralls/github/mcountryman/geotab-rx?style=flat-square">
  </a>
</p>

An unofficial typescript GeoTab SDK.

## Installation

Using yarn

```bash
yarn add geotab-rx
```

Using npm

```bash
npm i geotab-rx
```

## Examples

User credential authentication

```typescript
import { geotab, authenticate } from "geotab-rx";

const geotab = new Geotab();
await authenticate(geotab, {
  username: "MY_USERNAME",
  password: "MY_PASSWORD",
}).toPromise();
```

Log 100 drivers

```typescript
import { geotab } from "geotab-rx";
import { find } from "geotab-rx/repository/find";

find(geotab.users, {
  limit: 100,
  isDriver: true,
}).subscribe((driver) => {
  console.log("Found driver: ", driver);
});
```

Monitor ingition changes

```typescript
import { geotab } from "geotab-rx";
import { feedInterval } from "geotab-rx/feedInterval";
import { map } from "rxjs/operators";

feedInterval(geotab.statusData, {
  intervalMs: 1000,

  fromDate: new Date(Date.now() - 1000 * 60 * 60),
  deviceSearch: { id: process.env.DEVICE_ID_TO_MONITOR },
  diagnosticSearch: { id: "DiagnosticIgnitionId" }
}),
  .pipe(map((event) => event.data === 1)),
  .subscribe(isIgnitionOn => {
    console.log("Ignition is " + isIgnitionOn ? "on" : "off");
  })
```
