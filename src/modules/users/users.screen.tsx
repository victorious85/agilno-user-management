import React from 'react';
import { View } from 'react-native';
// Namespace
import { Routes } from '../../navigation';
// Components
import { SafeArea } from '../../shared/components/safe-area';
import { BlankContent, ListView, Search } from './components';
import { Button } from '../../shared/components/button';
import { Loader } from '../../shared/components/loader';
// Hooks
import useUsers from './users.hook.ts';
// Constants
import {
  BLANK_CONTENT_TITLE,
  BLANK_CONTENT_SUBTITLE,
  SCREEN_TITLE,
} from './users.constants.tsx';
// Assets
import UserPlus from '../../shared/assets/icons/user-plus.svg';
// Styles
import styles from './users.styles.ts';

interface PropsT extends StackRouting.ScreenProps<Routes.UserDetails> {}

/**
 * 🔸 Users Screen
 */
const UsersScreen: React.FC<PropsT> = () => {
  const {
    onItemPress,
    onActionPress,
    usersData,
    updateSearchKey,
    onPressAddUser,
    isShowBlankContent,
    isLoading,
  } = useUsers();

  return (
    <SafeArea>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Search onChangeText={updateSearchKey} />
          <Button icon={UserPlus} title={''} onPress={onPressAddUser} />
        </View>
        {isLoading && <Loader />}
        {isShowBlankContent ? (
          <BlankContent
            title={BLANK_CONTENT_TITLE}
            subtitle={BLANK_CONTENT_SUBTITLE}
          />
        ) : (
          <ListView
            users={usersData}
            onItemPress={onItemPress}
            onActionPress={onActionPress}
          />
        )}
      </View>
    </SafeArea>
  );
};

export const useUsersScreenOptions = (): RouteStack.ScreenConfigs => ({
  component: UsersScreen,
  options: {
    headerTitle: SCREEN_TITLE,
    headerShown: true,
  },
});

export default UsersScreen;
