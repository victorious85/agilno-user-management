import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Namespace
import {Routes} from '../navigation.namespace';

// Screens
import {useStackRoutes} from './routes.namespace.ts';

/* ====================================
 *   🔰 Stack Navigator
 ==================================== */

const {Navigator, Screen} =
  createNativeStackNavigator<StackRouting.ParamList>();

const UserStack: React.FC = () => {
  const routes = useStackRoutes();

  return (
    <Navigator>
      {Object.entries(routes).map(([screenName, {component, options = {}}]) => (
        <Screen
          key={screenName}
          options={options}
          component={component}
          name={screenName as keyof StackRouting.ParamList}
        />
      ))}
    </Navigator>
  );
};

export default UserStack;
