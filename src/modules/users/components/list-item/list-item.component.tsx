import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// Assets
import Arrow from '../../../../shared/assets/icons/right-arrow.svg';
// Styles
import styles from './list-item.styles.ts';

interface PropsT {
  name: string;
  email: string;
  role: string;
  onPress: () => void;
}

/**
 * 🔸 List Item Component
 */
const ListItemComponent: React.FC<PropsT> = ({
  name,
  email,
  role,
  onPress,
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text>{email}</Text>
      <Text>{role}</Text>
    </View>
    <View style={styles.iconContainer}>
      <Arrow width={24} height={24} />
    </View>
  </TouchableOpacity>
);

export default memo(ListItemComponent);
