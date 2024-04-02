import React, {useId} from 'react';
import {ScrollView} from 'react-native';
import {Routes} from '../../navigation';
import {ListItem} from './components/list-item';

interface PropsT extends StackRouting.ScreenProps<Routes.UserDetails> {}

/**
 * 🔸 Users Screen
 */
const UsersScreen: React.FC<PropsT> = ({navigation: {navigate}}) => {
  const [users, setUsers] = React.useState<User.Details[]>([
    {
      id: useId(),
      name: 'Viktor',
      email: 'v.p.kurochka@gmail.com',
      role: 'Developer',
    },
    {
      id: useId(),
      name: 'Yukon',
      email: 'yukon@gmail.com',
      role: 'Manager',
    },
  ]);

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
                params: user,
              });
            }}
          />
        );
      })}
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
