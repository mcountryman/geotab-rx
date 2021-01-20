import { pascal, snake } from "case";
import { IParseResult } from "./parse";
import { IIntrinsic, IModel, Type } from "./parse/types";

export function generate(parse: IParseResult): Map<string, string> {
  const files = new Map<string, string>();

  for (const model of parse.models) {
    const filename = snake(model.name) + ".ts";

    files.set(filename, generateModel(model));
  }

  return files;
}

export function generateTypeRef(type?: Type, imports?: string[]): string {
  return "";
}

export function generateModel(model: IModel): string {
  const imports: string[] = [];
  const properties = model.properties //
    .map((property) =>
      [
        property.comment,
        "\n",
        property.name,
        ": ",
        generateTypeRef(property.type(), imports),
      ].join()
    )
    .join("\n");

  return `
    ${imports.join("\n")}

    ${model.comment}
    export default interface ${pascal(model.name)} {
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
