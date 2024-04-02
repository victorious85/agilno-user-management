import {NavigatorScreenParams} from '@react-navigation/native-stack';
import {Routes} from '../navigation.namespace';
import {UsersRouting} from '../../modules/users/users.routes.types';
import {ContactsRouting} from '../../modules/contacts/contacts.routes.types';

declare global {
  namespace MainTabsRouting {
    type TabParamList = {
      [Routes.TabNavigator]: NavigatorScreenParams<ParamList>;
    };

    type ParamList = UsersRouting.TabParamList & ContactsRouting.TabParamList;
  }
}

export {};
