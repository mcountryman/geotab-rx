module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  projects: ["<rootDir>/packages/*/jest.config.js"],
  coverageDirectory: "<rootDir>/dist/coverage",
  collectCoverageFrom: ["<rootDir>/packages/*/src/**/*.ts"],
  moduleNameMapper: {
    ".json$": "identity-obj-proxy",
  },
  moduleDirectories: ["node_modules"],
};
