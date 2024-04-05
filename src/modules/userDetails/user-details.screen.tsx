import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
// Namespace
import {Routes} from '../../navigation';
// Constants
import {TITLE} from './user-details.constants.tsx';
// Components
import {Form, Profile} from './components';
// Styles
import Styles from './user-details.styles.ts';

interface PropsT extends StackRouting.ScreenProps<Routes.UserDetails> {}

/**
 * 🔸 User Details Screen
 */
const UserDetailsScreen: React.FC<PropsT> = ({route}) => {
  const {user} = route?.params;
  const [isViewMode, setIsViewMode] = useState(!!user?.id);

  const handleEdit = useCallback(() => {
    setIsViewMode(false);
  }, [setIsViewMode]);

  return (
    <View style={Styles.container}>
      {isViewMode ? (
        <Profile user={user} openForm={handleEdit} />
      ) : (
        <Form user={user} />
      )}
    </View>
  );
};

export const useUserDetailsScreenOptions = (): RouteStack.ScreenConfigs => ({
  component: UserDetailsScreen,
  options: {
    headerTitle: TITLE,
    headerShown: true,
    headerBackTitleVisible: false,
  },
});

export default UserDetailsScreen;
