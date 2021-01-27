module.exports = {
  preset: "ts-jest",
  testRegex: "src[/\\\\].*.spec.ts$",
  testEnvironment: "node",
  // projects: ["<rootDir>/packages/*/jest.config.js"],
  coverageDirectory: "<rootDir>/dist/coverage",
  collectCoverageFrom: ["<rootDir>/packages/*/src/**/*.ts"],
  moduleNameMapper: {
    "@geotab/(.+)": "<rootDir>/packages/$1/src",
  },
  moduleDirectories: ["node_modules"],
};
