import React, { memo } from 'react';
import { TextInput } from 'react-native';
// Store
import { useAppSelector } from '../../../../store/store.hooks.ts';
// Styles
import styles from './search-input.styles.ts';

interface PropsT {
  onChangeText: (text: string) => void;
}

/**
 * 🔸 Search Component
 */

const SearchComponent: React.FC<PropsT> = ({ onChangeText }) => {
  const { searchBy } = useAppSelector(state => state.settings);

  return (
    <TextInput
      style={styles.input}
      autoCorrect={false}
      spellCheck={false}
      placeholder={`Search by ${searchBy}`}
      onChangeText={onChangeText}
    />
  );
};

export default memo(SearchComponent);
