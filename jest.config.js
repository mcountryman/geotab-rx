module.exports = {
  preset: "ts-jest",
  testRegex: "src[/\\\\].*.spec.ts$",
  testEnvironment: "node",
  coverageDirectory: "<rootDir>/dist/coverage",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coveragePathIgnorePatterns: [
    // "<rootDir>/src/models/*.ts",
    "models"
  ],
  moduleDirectories: ["node_modules"],
};
