import React, { memo, useCallback } from 'react';
import { Text, View, TextStyle, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
// Styles
import styles from './row-item.styles.ts';

interface PropsT {
  value: string;
  onPress?: () => void;
  icon?: React.FC<SvgProps>;
  textStyle?: TextStyle;
}
/**
 * 🔸 Row Item Component
 */
const RowItemComponent: React.FC<PropsT> = ({
  icon: Icon,
  onPress,
  value,
  textStyle,
}) => {
  const renderRow = useCallback(
    (textStyle?: TextStyle) => (
      <View style={styles.row}>
        {Icon && (
          <View>
            <Icon />
          </View>
        )}
        <Text style={[styles.text, textStyle]}>{value}</Text>
      </View>
    ),
    [Icon, value],
  );

  return (
    <>
      {onPress ? (
        <TouchableOpacity onPress={onPress}>
          {renderRow(styles.email)}
        </TouchableOpacity>
      ) : (
        renderRow(textStyle)
      )}
    </>
  );
};

export default memo(RowItemComponent);
