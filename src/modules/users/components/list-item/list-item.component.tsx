import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// Styles
import Styles from './list-item.styles.ts';

interface PropsT {
  name: string;
  email: string;
  role: string;
  onPress: () => void;
  onLongPress: () => void;
}

/**
 * 🔸 List Item
 */
const ListItemComponent: React.FC<PropsT> = ({
  name,
  email,
  role,
  onPress,
  onLongPress,
}) => (
  <TouchableOpacity
    style={Styles.container}
    onPress={onPress}
    onLongPress={onLongPress}>
    <View style={Styles.column}>
      <Text style={Styles.name}>{name}</Text>
      <Text style={Styles.email}>{email}</Text>
      <Text style={Styles.role}>{role}</Text>
    </View>
  </TouchableOpacity>
);

export default ListItemComponent;
