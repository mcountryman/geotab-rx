var sourceMaps = require("rollup-plugin-sourcemaps");
var typescript = require("rollup-plugin-typescript2");
var commonjs = require("@rollup/plugin-commonjs");
var { terser } = require("rollup-plugin-terser");

export default [
  getConfigBase("cjs", "cjs/production"),
  getConfigBase("cjs", "cjs/development", true),
  getConfigBase("esm", "esm"),
];

function getConfigBase(format, target, skipMinify) {
  return {
    input: "src/index.ts",
    output: {
      dir: `dist/${target}`,
      name: "geotab-rx",
      format,
      freeze: false,
      exports: "named",
      sourcemap: true,
    },
    external: ["rxjs", "rxjs/operators", "uuid-random", "isomorphic-fetch"],
    plugins: [
      sourceMaps(),
      typescript({
        tsconfig: "tsconfig.json",
        tsconfigDefaults: {
          exclude: ["*.test.ts", "node_modules"],
          compilerOptions: {
            sourceMap: true,
            declaration: true,
          },
        },
        tsconfigOverride: {
          compilerOptions: {
            target: "esnext",
          },
        },
        useTsconfigDeclarationDir: true,
      }),
      commonjs({
        // use a regex to make sure to include eventual hoisted packages
        include: /\/node_modules\//,
      }),
      !skipMinify &&
        terser({
          output: { comments: false },
          compress: {
            keep_infinity: true,
            pure_getters: true,
            passes: 10,
          },
          ecma: 5,
          toplevel: format === "cjs",
          warnings: true,
        }),
    ],
    treeshake: {
      propertyReadSideEffects: false,
    },
  };
}
