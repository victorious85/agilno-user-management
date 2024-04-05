import React, { memo } from 'react';
import { Text, View, TextStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
// Styles
import styles from './profile.styles.ts';

interface PropsT {
  value: string;
  icon?: React.FC<SvgProps>;
  textStyle?: TextStyle;
}
/**
 * 🔸 Row Item Component
 */
const RowItemComponent: React.FC<PropsT> = ({
  icon: Icon,
  value,
  textStyle,
}) => {
  return (
    <View style={styles.row}>
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon />
        </View>
      )}
      <Text style={[styles.text, textStyle]}>{value}</Text>
    </View>
  );
};

export default memo(RowItemComponent);
