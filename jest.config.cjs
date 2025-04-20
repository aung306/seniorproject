module.exports = {
  preset: 'ts-jest', // Use ts-jest to transpile TypeScript
  testEnvironment: 'jest-environment-jsdom', // Specify jsdom environment
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // For TypeScript files
    '^.+\\.jsx?$': 'babel-jest', // For JavaScript and JSX files
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy', // Mock CSS imports
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Use jest-dom for extended matchers
  testPathIgnorePatterns: ['/node_modules/', '/build/'], // Ignore unnecessary paths
};
