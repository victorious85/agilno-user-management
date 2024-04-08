import React, { memo } from 'react';
import { ActivityIndicator, View, ViewStyle } from 'react-native';
// Styles
import { palettes } from '../../styles/palettes';
import styles from './styles';

interface IProps {
  style?: ViewStyle;
}

/**
 * 🔸 Loader Component
 */

const LoaderComponent: React.FC<IProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator color={palettes.primary.main} size={'large'} />
    </View>
  );
};

export default memo(LoaderComponent);
