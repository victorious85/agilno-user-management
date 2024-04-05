import React from 'react';
import {View} from 'react-native';
// Namespace
import {Routes} from '../../navigation';
// Constants
import {TITLE} from './setings.constants.ts';

interface PropsT extends StackRouting.ScreenProps<Routes.Settings> {}

/**
 * 🔸 Settings Screen
 */
const SettingsScreen: React.FC<PropsT> = () => <View></View>;

export const useSettingsOptions = (): RouteStack.BottomTabScreenConfigs => {
  return {
    component: SettingsScreen,
    options: {
      title: TITLE,
      tabBarLabel: TITLE,
    },
  };
};

export default SettingsScreen;
