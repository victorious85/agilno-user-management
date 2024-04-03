import React from 'react';
import {View} from 'react-native';
import {Routes} from '../../navigation';

interface PropsT extends StackRouting.ScreenProps<Routes.Settings> {}

/**
 * 🔸 SettingsScreen Screen
 */
const SettingsScreen: React.FC<PropsT> = () => <View></View>;

export const useSettingsOptions = (): RouteStack.BottomTabScreenConfigs => {
  return {
    component: SettingsScreen,
    options: {
      title: 'Settings',
      tabBarLabel: 'Settings',
    },
  };
};

export default SettingsScreen;
