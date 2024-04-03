import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Namespace
import {Routes} from '../navigation.namespace';

// Screens
import {TabNavigator} from '../main-tabs';

/* ====================================
 *   🔰 Stack Navigator
 ==================================== */

const {Navigator, Screen} =
  createNativeStackNavigator<StackRouting.ParamList>();

const Stack: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name={Routes.TabNavigator}
        component={TabNavigator}
        options={{animation: 'fade', headerShown: false}}
      />
    </Navigator>
  );
};

export default Stack;
