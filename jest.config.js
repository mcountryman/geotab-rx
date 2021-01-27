module.exports = {
  preset: "ts-jest",
  testRegex: "src[/\\\\].*.spec.ts$",
  testEnvironment: "node",
  coverageDirectory: "<rootDir>/dist/coverage",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  moduleDirectories: ["node_modules"],
};
