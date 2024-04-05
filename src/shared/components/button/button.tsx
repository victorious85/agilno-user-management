import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
// Styles
import styles from './button.styles.ts';
import { SvgProps } from 'react-native-svg';

interface PropsT {
  title?: string;
  onPress: () => void;
  icon?: React.FC<SvgProps>;
  disabled?: boolean;
  iconFillColor?: string;
}

/**
 * 🔸 Button Component
 */
const ButtonComponent: React.FC<PropsT> = ({
  title,
  onPress,
  icon: Icon,
  disabled = false,
  iconFillColor = 'white',
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={disabled}
      onPress={onPress}>
      {Icon && <Icon fill={iconFillColor} width={24} height={24} />}
      {title && <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default memo(ButtonComponent);
