const ignoredModules =
  'react-native|@react-native(-community)?/.*|react-navigation|@react-navigation|react-redux';

module.exports = {
  displayName: {
    name: 'aglino',
    color: 'green',
  },
  forceExit: true,
  preset: 'react-native',
  setupFiles: [
    './jest.setup.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.mock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$':
      '<rootDir>/__mocks__/media.mock.js',
  },
  transformIgnorePatterns: [`node_modules/(?!((jest-)?${ignoredModules}))`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
