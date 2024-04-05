import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Namespace
import { useStackRoutes } from './user-stack.namespace.ts';
import { USER_SCREEN_TITLE } from './user-stack.constants.ts';
// Screens
import { TabBarIcon } from '../../shared/components/tab-icon';
// Assets
import Users from '../../shared/assets/icons/users.svg';
// Styles
import { palettes } from '../../shared/styles/palettes';

/* ====================================
 *   🔰 User Stack Navigator
 ==================================== */

const { Navigator, Screen } =
  createNativeStackNavigator<StackRouting.ParamList>();

const UserStack: React.FC = () => {
  const routes = useStackRoutes();

  return (
    <Navigator
      screenOptions={{
        headerTintColor: palettes.primary.main,
        headerTitleStyle: { color: palettes.primary.main },
      }}>
      {Object.entries(routes).map(
        ([screenName, { component, options = {} }]) => (
          <Screen
            key={screenName}
            options={options}
            component={component}
            name={screenName as keyof StackRouting.ParamList}
          />
        ),
      )}
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
      tabBarIcon: ({ focused, color }) => (
        <TabBarIcon icon={Users} size={32} color={color} focused={focused} />
      ),
    },
  };
};

export default UserStack;
