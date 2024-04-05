import React, { memo } from 'react';
import { SvgProps } from 'react-native-svg';
// Styles
import { palettes } from '../../styles/palettes';

interface TabBarIconProps {
  icon: React.FC<SvgProps>;
  focused: boolean;
  color: string;
  size: number;
}

/**
 * 🔸 TabBar Icon Component
 */

const TabBarIconComponent: React.FC<TabBarIconProps> = ({
  icon: Icon,
  focused,
  color,
  size,
}) => {
  return (
    <Icon
      width={size}
      height={size}
      fill={focused ? palettes.primary.main : color}
    />
  );
};

export default memo(TabBarIconComponent);
