import React from 'react';
import {Text, View} from 'react-native';
import {Routes} from '../../navigation';
import UsersScreen from '../users/users.screen.tsx';

interface PropsT extends StackRouting.ScreenProps<Routes.Contacts> {}

/**
 * 🔸 Contacts Screen
 */
const ContactsScreen: React.FC<PropsT> = ({navigation: {navigate}}) => {
  return (
    <View>
      <Text>Contacts</Text>
    </View>
  );
};

export const useContactsOptions = (): RouteStack.BottomTabScreenConfigs => {
  return {
    component: ContactsScreen,
    options: {
      title: 'Contacts',
      tabBarLabel: 'Contacts',
    },
  };
};

export default ContactsScreen;
