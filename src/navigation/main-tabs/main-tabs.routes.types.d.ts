import {NavigatorScreenParams} from '@react-navigation/native-stack';
import {Routes} from '../navigation.namespace';

declare global {
  namespace MainTabsRouting {
    type TabParamList = {
      [Routes.TabNavigator]: NavigatorScreenParams<ParamList>;
    };

    type ParamList = UsersRouting.TabParamList & SettingsRouting.TabParamList;
  }
}

export {};
