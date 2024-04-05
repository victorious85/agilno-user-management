import React from 'react';
import {Button, View} from 'react-native';
// Namespace
import {Routes} from '../../navigation';
// Components
import {BlankContent, ListView} from './components';
// Hooks
import {useAppSelector} from '../../store/hooks';
// Constants
import {
  BLANK_CONTENT_TITLE,
  BLANK_CONTENT_SUBTITLE,
} from './users.constants.tsx';
// Styles
import Styles from './users.styles.ts';

interface PropsT extends StackRouting.ScreenProps<Routes.UserDetails> {}

/**
 * 🔸 Users Screen
 */
const UsersScreen: React.FC<PropsT> = ({navigation: {navigate}}) => {
  const {users} = useAppSelector(state => state.users);
  console.log('users ', users);

  const handleOpenAddUserForm = React.useCallback(() => {
    navigate({
      name: Routes.UserDetails,
      params: {user: {id: '', name: '', email: '', role: ''}},
    });
  }, [navigate]);

  const showBlankContent = !users.length;

  return (
    <View style={Styles.container}>
      {showBlankContent ? (
        <BlankContent
          title={BLANK_CONTENT_TITLE}
          subtitle={BLANK_CONTENT_SUBTITLE}
        />
      ) : (
        <ListView users={users} />
      )}
      <Button title="Add User" onPress={handleOpenAddUserForm} />
    </View>
  );
};

export const useUsersScreenOptions = (): RouteStack.ScreenConfigs => ({
  component: UsersScreen,
  options: {
    headerTitle: 'Users',
    headerShown: true,
  },
});

export default UsersScreen;
