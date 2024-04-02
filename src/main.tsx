import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// Screens
import Stack from './navigation/routes/routes.tsx';

/**
 * 🔸 Main Project Entry
 */
const Main = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default Main;
