import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  NavigationProp as NativeNavigationProp,
  RouteProp as NativeRouteProp,
} from '@react-navigation/core/src/types';

declare global {
  /**
   * --- 🔸 STACK ---
   */
  namespace StackRouting {
    type StackParamList = UsersRouting.ParamList;

    type ParamList = MainTabsRouting.TabParamList & StackParamList;

    type ComposedParamList = MainTabsRouting.ParamList & StackParamList;

    type ScreenProps<ScreenName extends keyof ComposedParamList> =
      NativeStackScreenProps<ComposedParamList, ScreenName>;

    type NavigationProp = NativeNavigationProp<StackParamList>;

    type RouteProp<ScreenName extends keyof ComposedParamList> =
      NativeRouteProp<ComposedParamList, typeof ScreenName>;
  }
}

export {};
