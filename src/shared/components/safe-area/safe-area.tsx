import React, { memo, ReactNode } from 'react';
import { StyleProp, ViewStyle, SafeAreaView } from 'react-native';
// Styles
import styles from './safe-area.styles.ts';

interface PropsT {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

/**
 * 🔸 Safe Area Component
 */
const SafeAreaComponent: React.FC<PropsT> = ({ children, style }) => (
  <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
);

export default memo(SafeAreaComponent);
