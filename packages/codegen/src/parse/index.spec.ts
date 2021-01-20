import { load } from "cheerio";
import "isomorphic-fetch";
import { getProperties, tryCacheModel, tryStoreProperty } from ".";
import { Cache } from "./cache";
import { IProperty } from "./types";

describe("parse", () => {
  test.each([
    `
    <member name="T:Geotab.Checkmate.ObjectModel.DriverChange" baseType="T:Geotab.Checkmate.ObjectModel.EntityWithVersion">
      <summary>
        <isSupported>true</isSupported>
        Information about timing of a
        <see cref="T:Geotab.Checkmate.ObjectModel.Driver"/>
        change.
      </summary>
    </member>
    `,
  ])("tryCacheModel", (xml) => {
    const $ = load(xml);
    const cache = new Cache();

    cache.add("Geotab.Checkmate.ObjectModel.EntityWithVersion", {
      type: "intrinsic",
      name: "any",
    });

    const model = tryCacheModel($, cache, $("member"));

    expect(model).not.toBeUndefined();
    expect(model?.name).toBe("Geotab.Checkmate.ObjectModel.DriverChange");
    expect(model?.baseType()?.name).toBe("any");
  });

  test.each([
    `
    <member name="P:Geotab.Checkmate.ObjectModel.Driver.DriverGroups">
      <summary>
        Gets or sets the home
        <see cref="T:System.String"/>
        (s) for the driver.
      </summary>
      <value>
        <see cref="T:System.Collections.Generic.IList\`1"/>
      </value>
    </member>
    <member name="P:Geotab.Checkmate.ObjectModel.Driver.Keys">
      <summary>
        Gets or sets the NFC Key's serial number associated with the driver.
      </summary>
      <value>
        <see cref="T:System.Collections.Generic.IList\`1"/>
      </value>
    </member>
    `,
  ])("getProperties", (xml) => {
    const $ = load(xml);
    const cache = new Cache();

    const props = getProperties(
      $,
      "Geotab.Checkmate.ObjectModel.Driver",
      cache
    );
    const prop1 = props[0];
    const prop2 = props[1];

    expect(prop1).not.toBeUndefined();
    expect(prop1.type()?.name).toBe("string");
    expect(prop1.type()?.array).toBeTruthy();
    expect(prop1.type()?.nullable).toBeFalsy();

    expect(prop2).not.toBeUndefined();
    expect(prop2.type()?.name).toBe("any");
    expect(prop2.type()?.array).toBeTruthy();
    expect(prop2.type()?.nullable).toBeFalsy();
  });

  test.each([
    `
    <member name="P:Geotab.Checkmate.ObjectModel.Driver.DriverGroups">
      <summary>
        Gets or sets the home
        <see cref="T:System.String"/>
        (s) for the driver.
      </summary>
      <value>
        <see cref="T:System.Collections.Generic.IList\`1"/>
      </value>
    </member>
    `,
  ])("tryStoreProperty", (xml) => {
    const $ = load(xml);
    const cache = new Cache();
    const store = new Set<IProperty>();

    tryStoreProperty($("member").first(), store, cache);

    const property = Array.from(store)[0];

    expect(property).not.toBeUndefined();
    expect(property.type()?.name).toBe("string");
    expect(property.type()?.array).toBeTruthy();
    expect(property.type()?.nullable).toBeFalsy();
  });
});
