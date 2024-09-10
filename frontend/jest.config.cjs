module.exports = {
  // Use ts-jest preset for handling TypeScript files
  preset: 'ts-jest',
  // Test environment set to jsdom for React component testing
  testEnvironment: 'jsdom',
  // Specify how to transform different file types
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  // Patterns to ignore during transformation (usually node_modules)
  transformIgnorePatterns: ['/node_modules/'],
  // File extensions Jest will look for
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // Babel configuration for handling modern JS and React code
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      },
    },
  },
};
