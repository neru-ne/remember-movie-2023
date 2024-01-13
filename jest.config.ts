module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  // testEnvironment: "jest-environment-jsdom",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": ["esbuild-jest", { sourcemap: true }]
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "__reports__",
        filename: "jest.html",
      },
    ],
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.ts",
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  //playwrightをJestのテスト範囲から除外
  // testPathIgnorePatterns: ["<rootDir>/tests/", "<rootDir>/tests-examples/"],

};
