import React, { useRef, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
// Components
import { ListItem } from '../list-item';
import { ListActionItem } from '../list-action-item';
// Styles
import styles from './list-view.styles.ts';

interface PropsT {
  users: User.Details[];
  onItemPress: (id: User.Details) => void;
  onActionPress: (id: string) => void;
}

/**
 * 🔸 List View Component
 */

const ListViewComponent: React.FC<PropsT> = ({
  users,
  onItemPress,
  onActionPress,
}) => {
  const openedRow = useRef<Swipeable>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      openedRow?.current?.close();
    }
  }, [isFocused]);

  // Components
  const renderItem = React.useCallback(
    ({ item }: { item: User.Details }) => (
      <Swipeable
        key={item.id}
        onSwipeableWillOpen={() => openedRow?.current?.close()}
        onSwipeableOpen={(_, swipeable) => (openedRow.current = swipeable)}
        renderRightActions={() => (
          <ListActionItem id={item.id} onPress={onActionPress} />
        )}>
        <ListItem
          name={item.name}
          email={item.email}
          role={item.role}
          onPress={() => onItemPress(item)}
        />
      </Swipeable>
    ),
    [],
  );

  const keyExtractor = React.useCallback((item: User.Details) => item?.id, []);

  const getItemLayout = (_, index: number) => ({
    length: 94,
    offset: 94 * index,
    index,
  });

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      // Optimizations
      getItemLayout={getItemLayout}
      onEndReachedThreshold={1}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      initialNumToRender={7}
      maxToRenderPerBatch={5}
      windowSize={5}
    />
  );
};

export default ListViewComponent;
