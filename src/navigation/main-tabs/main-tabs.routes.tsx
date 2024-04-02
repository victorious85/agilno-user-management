import React from 'react';
import {Routes} from '../navigation.namespace';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import UserStack from '../routes/user-stack.tsx';
import {Contacts} from '../../modules/contacts';
import {useMainTabsRoutes} from './main-tabs.namespace.ts';

const {Navigator, Screen} =
  createBottomTabNavigator<MainTabsRouting.ParamList>();

/**
 * 🔸 Main Tab Navigator
 */

const tabBarLabelStyle = {
  fontSize: 20,
  // paddingBottom: 5,
};

const MainTabNavigator: React.FC = () => {
  const routes = useMainTabsRoutes();

  return (
    <Navigator
      screenOptions={{
        tabBarAllowFontScaling: false,
        // tabBarActiveTintColor: palettes.primary1.main,
        // tabBarInactiveTintColor: palettes.grey[50],
        tabBarStyle: {
          height: 58,
          paddingHorizontal: 8,
        },
        tabBarLabelStyle,
      }}
      safeAreaInsets={{bottom: 0}}>
      <Screen
        name={Routes.UsersStack}
        component={UserStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Users',
        }}
      />
      <Screen
        name={Routes.Contacts}
        component={Contacts}
        options={{
          headerShown: true,
          tabBarLabel: 'Contacts',
        }}
      />
      {/*{Object.entries(routes).map(([screenName, {component, options = {}}]) => (*/}
      {/*  <Screen*/}
      {/*    key={screenName}*/}
      {/*    options={{...options}}*/}
      {/*    component={component}*/}
      {/*    name={screenName as keyof MainTabsRouting.ParamList}*/}
      {/*  />*/}
      {/*))}*/}
    </Navigator>
  );
};

// Tab Navigator Screen options
// export const useTabNavigatorScreenOptions = () => {
//   const {typography, palettes} = useTheme();
//   const tabHeaderOptions = useTabHeaderScreenOptions();
//
//   // Insets
//   const topInset = 9;
//   const iconTopInset = 16;
//   const barLabelTopInset = 7 + topInset + iconTopInset;
//
//   // Options
//   const tabBarOptions: RouteStack.BottomTabOptions = {
//     tabBarAllowFontScaling: false,
//     tabBarActiveTintColor: palettes.primary.main,
//     tabBarInactiveTintColor: palettes.grey[60],
//     tabBarStyle: {
//       height: 83,
//       position: 'absolute',
//       paddingTop: topInset,
//       // Ask about side insets
//       paddingHorizontal: 16,
//       borderTopColor: palettes.grey[10],
//     },
//     tabBarIconStyle: {position: 'absolute', top: iconTopInset},
//     tabBarLabelStyle: {
//       ...(typography.bodySmall as TextStyle),
//       position: 'absolute',
//       fontFamily: typography.fontFamily.medium,
//       top: barLabelTopInset,
//     },
//   };
//
//   return useDefaultTabScreenOptions({...tabBarOptions, ...tabHeaderOptions});
// };

export default MainTabNavigator;
