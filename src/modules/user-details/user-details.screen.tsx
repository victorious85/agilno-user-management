import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
// Namespace
import { Routes } from '../../navigation';
// Components
import { Form, Profile } from './components';
import { SafeArea } from '../../shared/components/safe-area';
// Styles
import styles from './user-details.styles.ts';

interface PropsT extends StackRouting.ScreenProps<Routes.UserDetails> {}

/**
 * 🔸 User Details Screen
 */
const UserDetailsScreen: React.FC<PropsT> = ({ route }) => {
  const user = route?.params?.user;
  const [isViewMode, setIsViewMode] = useState(!!user?.id);

  const handleEdit = useCallback(() => {
    setIsViewMode(false);
  }, [setIsViewMode]);

  return (
    <SafeArea>
      <View style={styles.container}>
        {isViewMode ? (
          <Profile user={user} openForm={handleEdit} />
        ) : (
          <Form user={user} />
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
