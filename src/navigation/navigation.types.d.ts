/* eslint-disable @typescript-eslint/no-explicit-any */
import { ViewStyle } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

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

    interface ScreenConfigs {
      component: React.FC<any>;
      options?: Options;
    }

    interface BottomTabScreenConfigs extends ScreenConfigs {
      options?: BottomTabOptions;
    }

    type ScreenRoutes<ParamList> = Record<
      keyof ParamList | string,
      ScreenConfigs
    >;
    type BottomTabScreenRoutes<ParamList> = Record<
      keyof ParamList | string,
      BottomTabScreenConfigs
    >;
  }
}

export {};
