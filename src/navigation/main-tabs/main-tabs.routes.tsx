import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import {useMainTabsRoutes} from './main-tabs.namespace.ts';

const {Navigator, Screen} =
  createBottomTabNavigator<MainTabsRouting.ParamList>();

/**
 * 🔸 Main Tab Navigator
 */

const MainTabNavigator: React.FC = () => {
  const routes = useMainTabsRoutes();

  return (
    <Navigator
      screenOptions={{
        tabBarAllowFontScaling: false,
        tabBarStyle: {
          height: 58,
          paddingHorizontal: 8,
        },
        tabBarLabelStyle: {
          fontSize: 20,
        },
      }}
      safeAreaInsets={{bottom: 0}}>
      {Object.entries(routes).map(([screenName, {component, options = {}}]) => (
        <Screen
          key={screenName}
          options={{...options}}
          component={component}
          name={screenName as keyof MainTabsRouting.ParamList}
        />
      ))}
    </Navigator>
  );
};

export default MainTabNavigator;
