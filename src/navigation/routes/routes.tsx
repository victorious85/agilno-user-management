import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Namespace
import {Routes} from '../navigation.namespace';

// Screens
import {TabNavigator} from '../main-tabs';
import {useStackRoutes} from './routes.namespace.ts';

/* ====================================
 *   🔰 Stack Navigator
 ==================================== */

const {Navigator, Screen} =
  createNativeStackNavigator<StackRouting.ParamList>();

const Stack: React.FC = () => {
  const routes = useStackRoutes();

  return (
    <Navigator>
      <Screen
        name={Routes.TabNavigator}
        component={TabNavigator}
        options={{animation: 'fade', headerShown: false}}
      />
      {/*{Object.entries(routes).map(([screenName, {component, options = {}}]) => (*/}
      {/*  <Screen*/}
      {/*    key={screenName}*/}
      {/*    options={options}*/}
      {/*    component={component}*/}
      {/*    name={screenName as keyof StackRouting.ParamList}*/}
      {/*  />*/}
      {/*))}*/}
    </Navigator>
  );
};

export default Stack;
