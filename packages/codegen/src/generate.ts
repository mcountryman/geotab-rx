import { camel, pascal, snake } from "case";
import { IParseResult } from "./parse";
import { IIntrinsic, IModel, Type } from "./parse/types";

export function* getNextFile(parse: IParseResult): Generator<[string, string]> {
  for (const model of parse.models) {
    const def = generateModel(model);
    if (!def) continue;

    yield [getModelFilename(model), def];
  }
}

export function generateTypeRef(type?: Type, imports?: Set<string>): string {
  switch (type?.type) {
    case "model":
      imports?.add(
        `import ${getModelName(type)} from "./${getModelModule(type)}";`
      );

      return getModelName(type);
    case "intrinsic":
      return generateIntrinsic(type);
    default:
      return "";
  }
}

export function generateModel(model: IModel): string | undefined {
  const imports = new Set<string>();
  const properties = model.properties
    .filter((property) => property.type())
    .map((property) =>
      [
        property.comment,
        camel(property.name),
        ": ",
        generateTypeRef(property.type(), imports),
        ",",
      ].join("")
    )
    .join("\n");

  let extend = "";
  const baseType = model.baseType();
  if (baseType?.type === "model") {
    extend = " extends " + getModelName(baseType);
    imports.add(
      `import ${getModelName(baseType)} from "./${getModelModule(baseType)}";`
    );
  }

  const importBlock = Array.from(imports.values())
    .filter((x) => !x.match(`^import ${getModelName(model)} `))
    .join("\n");

  return `
    ${importBlock}

    ${model.comment} export default interface ${getModelName(model)} ${extend} {
      ${properties}
    }
  `;
}

export function generateIntrinsic(intrinsic: IIntrinsic): string {
  let type = intrinsic.name;

  if (intrinsic.array) type += "[]";
  if (intrinsic.nullable) type += " | undefined";

  return type;
}

export function getModelName(model: IModel): string {
  return pascal(model.name.replace(/^.*[.]/, ""));
}

export function getModelModule(model: IModel): string {
  return snake(model.name?.replace(/^.*[.]/, ""));
}

export function getModelFilename(model: IModel): string {
  return getModelModule(model) + ".ts";
}
