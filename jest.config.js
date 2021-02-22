module.exports = {
  // modulePaths: ["<rootDir>/src/"],
  // // rootDir: "<rootDir>/src/",
  // moduleDirectories: [
  //   "node_modules",
  //   "src"
  // ],
  setupFiles: [
    '<rootDir>/jest.setup.js',
  ],
  // testPathIgnorePatterns: [
  //   '<rootDir>/.next/',
  //   '<rootDir>/node_modules/',
  //   '<rootDir>/.storybook',
  //   '<rootDir>/stories'
  // ],
  // // rootDir: './',
  // // moduleDirectories: ["node_modules", "src"],
  // // moduleDirectories: ["node_modules", "./"],

  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  modulePaths: [
    'src',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/__mocks__/fileMock.js',
    '\\.scss$': 'identity-obj-proxy',
    '^react-native$': 'react-native-web',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'mjs',
  ],
}
