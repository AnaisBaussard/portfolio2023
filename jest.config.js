module.exports = {
  globals: {
    window: {},
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^config(.*)$': '<rootDir>/src/config$1',
    '^context(.*)$': '<rootDir>/src/context$1',
    '^design-system(.*)$': '<rootDir>/src/design-system$1',
    '^features(.*)$': '<rootDir>/src/features$1',
    '^helpers(.*)$': '<rootDir>/src/helpers$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^tests(.*)$': '<rootDir>/src/tests$1',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  // testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
}
