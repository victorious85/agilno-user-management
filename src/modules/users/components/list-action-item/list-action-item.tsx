import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
// Assets
import Delete from '../../../../shared/assets/icons/delete.svg';
// Styles
import styles from './list-action-item.styles.ts';
import { palettes } from '../../../../shared/styles/palettes';

interface PropsT {
  id: string;
  onPress: (id: string) => void;
}

/**
 * 🔸 List Action Item Component
 */

const ListActionItemComponent: React.FC<PropsT> = ({ id, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(id)} style={styles.container}>
      <Delete fill={palettes.error.main} />
    </TouchableOpacity>
  );
};

export default ListActionItemComponent;
