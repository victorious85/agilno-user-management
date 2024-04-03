import React from 'react';
import 'react-native-get-random-values';
// Components
import {AppProviders} from './providers/app-providers';
// Main
import Main from './main';

/**
 * Core project component
 */

const App = () => (
  <AppProviders>
    <Main />
  </AppProviders>
);

export default App;
