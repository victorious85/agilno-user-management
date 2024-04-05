import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// Screens
import {TabNavigator} from './navigation/main-tabs';

/**
 * 🔸 Main Project Entry
 */
const Main = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Main;
