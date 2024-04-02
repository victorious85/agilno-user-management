import React from 'react';
import {Text, View} from 'react-native';
import {Routes} from '../../navigation';
import Styles from './user-details.styles.ts';

interface PropsT extends StackRouting.ScreenProps<Routes.UserDetails> {}

/**
 * 🔸 User Details Screen
 */
const UserDetailsScreen: React.FC<PropsT> = ({
  navigation: {navigate},
  route: {params},
}) => {
  console.log('user ', params);
  return (
    <View>
      <View style={Styles.column}>
        <Text style={Styles.name}>{params?.name}</Text>
        <Text style={Styles.email}>{params?.email}</Text>
        <Text style={Styles.role}>{params?.role}</Text>
      </View>
    </View>
  );
};

export const useUserDetailsScreenOptions = (): RouteStack.ScreenConfigs => ({
  component: UserDetailsScreen,
  options: {
    headerTitle: 'User Details',
    headerShown: true,
    headerBackTitleVisible: false,
  },
});

export default UserDetailsScreen;
