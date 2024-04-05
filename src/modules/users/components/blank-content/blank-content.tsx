import React from 'react';
import {Text, View} from 'react-native';
// Styled
import Styles from './blank-content.styles.ts';

interface PropsT {
  title?: string;
  subtitle?: string;
}

/**
 * 🔸 Blank Content
 */
const BlankContentComponent: React.FC<PropsT> = ({title, subtitle}) => {
  return (
    <View style={Styles.container}>
      {title && <Text style={Styles.title}>{title}</Text>}
      {subtitle && <Text style={Styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default BlankContentComponent;
