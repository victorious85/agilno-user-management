import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import {useStackRoutes} from './user-stack.namespace.ts';
import {USER_SCREEN_TITLE} from './user-stack.constants.ts';

/* ====================================
 *   🔰 User Stack Navigator
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

export const useUserStackOptions = (): RouteStack.BottomTabScreenConfigs => {
  return {
    component: UserStack,
    options: {
      headerShown: false,
      title: USER_SCREEN_TITLE,
      tabBarLabel: USER_SCREEN_TITLE,
    },
  };
};

export default UserStack;
