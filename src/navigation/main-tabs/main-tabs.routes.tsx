import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Utils
import { useTabBarHeight } from './main-tabs.utils.ts';
// Screens
import { useMainTabsRoutes } from './main-tabs.namespace.ts';
// Styles
import { palettes } from '../../shared/styles/palettes';

const { Navigator, Screen } =
  createBottomTabNavigator<MainTabsRouting.ParamList>();

/**
 * 🔸 Main Tab Navigator
 */

const MainTabNavigator: React.FC = () => {
  const routes = useMainTabsRoutes();
  const { tabBarHeight, tabBarPaddingBottom } = useTabBarHeight();

  return (
    <Navigator
      screenOptions={{
        tabBarAllowFontScaling: false,
        tabBarStyle: {
          height: tabBarHeight,
        },
        tabBarLabelStyle: {
          fontSize: 20,
          paddingBottom: tabBarPaddingBottom,
        },
        tabBarActiveTintColor: palettes.primary.main,
        headerTitleStyle: { color: palettes.primary.main },
      }}>
      {Object.entries(routes).map(
        ([screenName, { component, options = {} }]) => (
          <Screen
            key={screenName}
            options={{ ...options }}
            component={component}
            name={screenName as keyof MainTabsRouting.ParamList}
          />
        ),
      )}
    </Navigator>
  );
};

export default MainTabNavigator;
