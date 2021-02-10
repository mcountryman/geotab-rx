module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "<rootDir>/dist/coverage",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coveragePathIgnorePatterns: [
    // "<rootDir>/src/models/*.ts",
    "models",
  ],
  moduleDirectories: ["node_modules"],
  modulePathIgnorePatterns: [
    "<rootDir>/src/__tests__/helpers"
  ]
};
