import { load } from "cheerio";
import { Cache } from "./cache";
import { IModel, IProperty } from "./types";

type Root = ReturnType<typeof load>;
type Cheerio = ReturnType<ReturnType<typeof load>>;

export interface IParseResult {
  models: IModel[];
}

export function parse(xml: string | Buffer): IParseResult {
  const $ = load(xml);
  const cache = new Cache();

  $("member[name^=\"T:\"]") //
    .each((_, el) => tryCacheModel($, cache, $(el)));

  return {
    models: cache.models,
  };
}

export function tryCacheModel(
  $: Root,
  cache: Cache,
  el: Cheerio
): IModel | undefined {
  const name = el.attr("name")?.substring(2);
  const baseTypeName = el.attr("basetype")?.substring(2);

  if (!name) return;
  // Ensure base `name` is valid for typescript
  if (!name.match(/^.*[.][$A-Z_][0-9A-Z_$]*$/i)) return;

  if (baseTypeName) {
    // Ensure `baseType` is valid for typescript
    if (!baseTypeName.match(/^.*[.][$A-Z_][0-9A-Z_$]*$/i)) {
      // throw new Error(`Unexpected baseTypeName '${baseTypeName}'!`);
    }
  }

  cache.add(name, {
    name,
    type: "model",
    comment: tryGetComment(el),
    properties: getProperties($, name, cache),

    baseType: () => cache.get(baseTypeName),
  });
}

export function getProperties(
  $: Root,
  parentName: string,
  cache: Cache
): IProperty[] {
  const properties = new Set<IProperty>();

  $(`member[name^="P:${parentName}"],member[name^="F:${parentName}"]`) //
    .each((_, el) => tryStoreProperty($(el), properties, cache));

  return Array.from(properties);
}

export function tryStoreProperty(
  el: Cheerio,
  store: Set<IProperty>,
  cache: Cache
): void {
  const name = el
    .attr("name")
    ?.substring(2)
    ?.replace(/^.*[.]/, "");
  const typeNames = el.find("value see");
  let typeName = typeNames?.first().attr("cref")?.substring(2);

  let array = false;
  const nullable = false;

  if (!name) return;
  if (!typeName) return;

  // Handle `Nullable` case
  if (typeName.match(/^System.Nullable/)) {
    return;

    // nullable = true;
    // typeName = typeNames.last()?.attr("cref")?.substring(2);

    // if (!typeName || typeNames.length < 2)
    //   throw new Error("Expected generic argument for 'System.Nullable'");
  }

  // Handle `List` case
  if (typeName.match(/^System.Collections.Generic.I?List/)) {
    array = true;

    if (typeNames.length > 1) {
      typeName = typeNames.last()?.attr("cref")?.substring(2);
    } else {
      // Attempt to extrapolate type from summary and default to `System.Object` if not found
      const summaryGuess = el
        .find("summary see[cref^=\"T:\"]")
        .attr("cref")
        ?.substring(2);

      if (summaryGuess && summaryGuess.length > 0) {
        typeName = summaryGuess;
      } else {
        typeName = "System.Object";
      }
    }
  }

  if (!typeName) throw new Error(`Invalid typename '${typeName}'!`);

  store.add({
    name,
    comment: tryGetComment(el),

    type: () => cache.get(typeName, array, nullable),
  });
}

/**
 * Attempt to generate typedoc formatted comment string from XML doc
 * @param el
 */
export function tryGetComment(el: Cheerio): string | undefined {
  const summary = el.find("summary").html()?.trim();
  if (!summary) return;

  return `
  /**
   * ${summary}
   */
  `;
}
