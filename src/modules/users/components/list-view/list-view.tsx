import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Components
import {ListItem} from '../list-item';
// Namespace
import {Routes} from '../../../../navigation';
// Store
import {deleteUser} from '../../../../store/slices/users-slices.ts';
import {useAppDispatch} from '../../../../store/hooks';
// Utils
import {showConfirmAlert} from '../../../../utils';
// Constants
import {
  ALERT_MESSAGE,
  ALERT_TITLE,
  BUTTON_TITLE,
} from './list-view.constants.ts';

interface PropsT {
  users: User.Details[];
}

/**
 * 🔸 List View Component
 */

const ListView: React.FC<PropsT> = ({users}) => {
  const {navigate} = useNavigation<StackRouting.NavigationProp>();
  const dispatch = useAppDispatch();

  const handleDeleteUser = React.useCallback(
    (id: string) => {
      dispatch(deleteUser(id));
    },
    [dispatch],
  );

  const handleLongPress = useCallback(
    (id: string) => {
      showConfirmAlert({
        title: ALERT_TITLE,
        message: ALERT_MESSAGE,
        okButtonTitle: BUTTON_TITLE,
        onPress: () => handleDeleteUser(id),
      });
    },
    [handleDeleteUser],
  );

  const getItemLayout = (data: any, index: number) => ({
    length: 94,
    offset: 94 * index,
    index,
  });

  const keyExtractor = React.useCallback((item: User.Details) => item?.id, []);

  // Components
  const renderItem = React.useCallback(
    ({item}: {item: User.Details}) => (
      <ListItem
        name={item.name}
        email={item.email}
        role={item.role}
        onPress={() => {
          navigate(Routes.UserDetails, {user: item});
        }}
        onLongPress={() => handleLongPress(item.id)}
      />
    ),
    [handleLongPress, navigate],
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      // Optimizations
      getItemLayout={getItemLayout}
      onEndReachedThreshold={1}
      initialNumToRender={5} // Render first 5 items initially
      maxToRenderPerBatch={5} // Render up to 5 items per batch
      windowSize={5} // Maintain 5 items in memory at a time
    />
  );
};

export default ListView;
