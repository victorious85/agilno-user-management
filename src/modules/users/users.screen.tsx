import React from 'react';
import {Alert, Button, ScrollView} from 'react-native';
// Namespace
import {Routes} from '../../navigation';
// Components
import {ListItem} from './components/list-item';
// Hooks
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {deleteUser} from '../../store/slices/users-slices.ts';

interface PropsT extends StackRouting.ScreenProps<Routes.UserDetails> {}

/**
 * 🔸 Users Screen
 */
const UsersScreen: React.FC<PropsT> = ({navigation: {navigate}}) => {
  const dispatch = useAppDispatch();
  const {users} = useAppSelector(state => state.users);
  console.log('users ', users);

  const handleOpenAddUserForm = React.useCallback(() => {
    navigate({
      name: Routes.UserDetails,
      params: {user: {id: '', name: '', email: '', role: ''}},
    });
  }, [navigate]);

  const handleDeleteUser = React.useCallback(
    (id: string) => {
      dispatch(deleteUser(id));
    },
    [dispatch],
  );

  const handleLongPress = (id: string) => {
    Alert.alert('Delete User', 'Are you sure you want to delete this user?', [
      {text: 'Cancel', onPress: () => console.log('Canceled')},
      {text: 'Delete', onPress: () => handleDeleteUser(id)},
    ]);
  };

  // // Components
  // const renderItem = React.useCallback(
  //   ({item}) => (
  //     <ListItem
  //       item={item}
  //       onPress={() => {
  //         navigate({
  //           name: Routes.UserDetails,
  //           params: {id: 'id'},
  //         });
  //       }}
  //     />
  //   ),
  //   [navigate],
  // );

  return (
    <ScrollView>
      {users.map(user => {
        return (
          <ListItem
            key={user.id}
            name={user.name}
            email={user.email}
            role={user.role}
            onPress={() => {
              navigate({
                name: Routes.UserDetails,
                params: {user: user},
              });
            }}
            onLongPress={() => handleLongPress(user.id)}
          />
        );
      })}
      <Button title="Add User" onPress={handleOpenAddUserForm} />
    </ScrollView>
  );
};

export const useUsersOptions = (): RouteStack.ScreenConfigs => ({
  component: UsersScreen,
  options: {
    headerTitle: 'Users',
    headerShown: true,
  },
});

export default UsersScreen;
