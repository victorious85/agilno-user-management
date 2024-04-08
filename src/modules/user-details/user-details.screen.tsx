import React from 'react';
import { View } from 'react-native';
// Namespace
import { Routes } from '../../navigation';
// Components
import { Form, Profile } from './components';
import { SafeArea } from '../../shared/components/safe-area';
// Hook
import { useUserDetails } from './use-details.hook.ts';
// Styles
import styles from './user-details.styles.ts';

interface PropsT extends StackRouting.ScreenProps<Routes.UserDetails> {}

/**
 * 🔸 User Details Screen
 */
const UserDetailsScreen: React.FC<PropsT> = ({ route: { params } }) => {
  const { user, changeViewMode, isViewMode } = useUserDetails(params?.userId);

  return (
    <SafeArea>
      <View style={styles.container}>
        {isViewMode ? (
          <Profile user={user} openForm={changeViewMode} />
        ) : (
          <Form user={user} closeForm={changeViewMode} />
        )}
      </View>
    </SafeArea>
  );
};

export const useUserDetailsScreenOptions = (): RouteStack.ScreenConfigs => ({
  component: UserDetailsScreen,
  options: {
    headerTitle: '',
    headerShown: true,
    headerBackTitleVisible: false,
  },
});

export default UserDetailsScreen;
