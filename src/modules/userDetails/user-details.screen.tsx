import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {Routes} from '../../navigation';
// Components
import {Form} from './components/form';
// Styles
import Styles from './user-details.styles.ts';

interface PropsT extends StackRouting.ScreenProps<Routes.UserDetails> {}

/**
 * 🔸 User Details Screen
 */
const UserDetailsScreen: React.FC<PropsT> = ({route}) => {
  const {user} = route?.params;
  const [isViewMode, setIsViewMode] = useState(!!user?.id);

  const handleEdit = () => {
    setIsViewMode(false);
  };

  return (
    <View>
      {isViewMode ? (
        <>
          <View style={Styles.column}>
            <Text style={Styles.name}>{user?.name}</Text>
            <Text style={Styles.email}>{user?.email}</Text>
            <Text style={Styles.role}>{user?.role}</Text>
          </View>
          <Button title="Edit" onPress={handleEdit} />
        </>
      ) : (
        <Form user={user} />
      )}
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
