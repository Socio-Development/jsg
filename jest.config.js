/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  collectCoverageFrom: ['src/**'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  watchPathIgnorePatterns: [
    '<rootDir>/.vscode',
    '<rootDir>/coverage',
    '<rootDir>/dist',
    '<rootDir>/lib',
    '<rootDir>/playground',
    '<rootDir>/node_modules',
    '<rootDir>/scripts',
    '<rootDir>/jest.config.js',
    '<rootDir>/LICENSE',
    '<rootDir>/package.json',
    '<rootDir>/package-lock.json',
    '<rootDir>/README.md',
    '<rootDir>/tsconfig.json',
  ],
}
