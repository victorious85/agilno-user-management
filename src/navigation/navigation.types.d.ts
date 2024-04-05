/* eslint-disable @typescript-eslint/no-explicit-any */
import { ViewStyle } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

declare global {
  namespace RouteStack {
    interface Options extends NativeStackNavigationOptions {
      headerStyle?: {
        backgroundColor?: string;
      };
    }
    interface BottomTabOptions extends BottomTabNavigationOptions {
      headerStyle?: ViewStyle;
    }

    interface TopTabOptions extends MaterialTopTabNavigationOptions {
      headerStyle?: ViewStyle;
    }

    interface ScreenConfigs {
      component: React.FC<any>;
      options?: Options;
    }

    interface BottomTabScreenConfigs extends ScreenConfigs {
      options?: BottomTabOptions;
    }

    interface TopTabConfigs extends ScreenConfigs {
      options?: TopTabOptions;
    }

    type ScreenRoutes<ParamList> = Record<
      keyof ParamList | string,
      ScreenConfigs
    >;
    type BottomTabScreenRoutes<ParamList> = Record<
      keyof ParamList | string,
      BottomTabScreenConfigs
    >;
    type TopTabScreenRoutes<ParamList> = Record<
      keyof ParamList | string,
      TopTabConfigs
    >;
  }
}

export {};
