module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "<rootDir>/dist/coverage",
  collectCoverageFrom: [".*/src/**/*.ts"],
  moduleDirectories: ["node_modules"],
};
