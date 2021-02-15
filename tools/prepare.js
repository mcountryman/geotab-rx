/**
 * - Creates `<rootDir>/dist/.npmignore`.
 * - Creates modified duplicate of `package.json` in `<rootDir>/dist` folder.
 * - Copies `src` dir to `dist`
 * - Updates source maps to point at copied `src` dir.
 *
 * Inspiration for this taken from [rxjs](https://github.com/ReactiveX/rxjs).
 */
const { glob: globCallback } = require("glob");
const { join, dirname, relative } = require("path");
const { readFile, writeFile, readdir, stat, copyFile, mkdir } = require("fs").promises;
const { promisify } = require("util");
const glob = promisify(globCallback);

const SRC_DIR = join(__dirname, "../src");
const MANIFEST_TMPL = join(__dirname, "../package.json");
const MANIFEST_DIST = join(__dirname, "../dist/package.json");
const DIST_REPLACE = [/^\.\/dist\//, "./"];

Promise.all([
  createNpmIgnore(),
  copyManifest(),
  copyFile(join(__dirname, "../LICENSE.md"), join(__dirname, "../dist/LICENSE.md")),
  copyFile(join(__dirname, "../README.md"), join(__dirname, "../dist/README.md")),
  copyFolder(join(__dirname, "../src"), join(__dirname, "../dist/src")),
  copyFolder(join(__dirname, "../examples"), join(__dirname, "../dist/examples")),
  updateSourceMaps(join(__dirname, "../dist")),
]).catch(console.error);

/**
 * Create `<rootDir>/dist/.npmignore`.
 */
function createNpmIgnore() {
  return writeFile(
    join(__dirname, "../dist/.npmignore"),
    `
docs/
coverage/
  `
  );
}

/**
 * Copy `<rootDir>/package.json` to `<rootDir>/dist/package.json` and update `main`,
 * `module`, `es2015`, and `typings` paths to reflect new location.
 */
function copyManifest() {
  return readFile(MANIFEST_TMPL, "utf-8")
    .catch((err) => console.error("Failed to read package.json", err))
    .then((manifest) => JSON.parse(manifest))
    .then((manifest) => ({
      ...manifest,
      main: manifest.main.replace(DIST_REPLACE[0], DIST_REPLACE[1]),
      module: manifest.module.replace(DIST_REPLACE[0], DIST_REPLACE[1]),
      es2015: manifest.es2015.replace(DIST_REPLACE[0], DIST_REPLACE[1]),
      typings: manifest.typings.replace(DIST_REPLACE[0], DIST_REPLACE[1]),
    }))
    .then((manifest) => JSON.stringify(manifest, null, 2))
    .then((manifest) => writeFile(MANIFEST_DIST, manifest))
    .catch((err) =>
      console.error("Failed to write modified 'package.json' to dist dir", err)
    );
}

/**
 * Copy `<rootDir>/src` to `<rootDir>/dist/src`.
 *
 * @param {string} source - Defaults to `SRC_DIR`
 * @param {string} target - Defaults to `<rootDir>/dist/src`
 */
function copyFolder(source, target) {
  source = source || SRC_DIR;
  target = target || join(__dirname, "../dist/src");

  return readdir(source)
    .catch((err) => panic(`Failed to readdir '${source}'`, err))
    .then((paths) =>
      paths
        .map((path) => ({
          // Absolute path to source file
          path: join(source, path),
          // Absolute path to dest file
          target: join(target, path),
          // Absolute path to dest file dir,
          targetDir: dirname(join(target, path)),
        }))
        .map(({ path, target, targetDir }) =>
          // Get source file information
          stat(path)
            .catch((err) => panic(`Failed to stat path '${path}'`, err))
            .then((stats) => {
              return stats.isDirectory()
                ? // Recurse if directory
                  copyFolder(path, target)
                : // mkdir -p if needed, then copy file
                  mkdir(targetDir, { recursive: true })
                    .catch((err) => panic(`Failed to mkdir '${targetDir}'`, err))
                    .then((_) => copyFile(path, target));
              // .then((_) => console.log(`Copied '${path}'`));
            })
            .catch((err) => panic(`Failed to copy path '${path}'`, err))
        )
    )
    .then((promises) => Promise.all(promises));
}

/**
 * Remap sourcemap `<rootDir>/src` sources to `<rootDir>/dist/src` in supplied directory.
 *
 * @param {string} dir - The directory to remap sourcemaps in.
 */
function updateSourceMaps(dir) {
  const srcExpr = /^(?:\.{1,2}\/)*src/;
  const notLocalExpr = /^([^\.])/;

  return glob(dir + "/**/*.{js,ts}.map")
    .then((paths) =>
      paths.map((path) =>
        readFile(path, "utf-8")
          .then((json) => JSON.parse(json))
          .then((sourceMap) => ({
            ...sourceMap,
            sources: (sourceMap.sources || []).map((source) =>
              source
                .replace(srcExpr, relative(dirname(path), join(__dirname, "../dist/src")))
                .replace(notLocalExpr, "./$1")
            ),
          }))
          .then((sourceMap) => JSON.stringify(sourceMap))
          .then((json) => writeFile(path, json))
      )
    )
    .then((promises) => Promise.all(promises));
}

function panic(message, err) {
  console.error(message, err);
  process.exit(1337);
}
