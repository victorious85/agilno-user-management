import React, { memo } from 'react';
import { Text, View } from 'react-native';
// Assets
import NoRecords from '../../../../shared/assets/icons/no-records.svg';
// Styles
import styles from './blank-content.styles.ts';

interface PropsT {
  title?: string;
  subtitle?: string;
}

/**
 * 🔸 Blank Content Component
 */
const BlankContentComponent: React.FC<PropsT> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <NoRecords />
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default memo(BlankContentComponent);
