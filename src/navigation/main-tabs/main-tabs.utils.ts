import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useTabBarHeight = () => {
  const TAB_HEIGHT = 65;
  const PADDING_BOTTOM = 5;
  const { bottom } = useSafeAreaInsets();

  return {
    tabBarHeight: bottom + TAB_HEIGHT,
    tabBarPaddingBottom: bottom ? 0 : PADDING_BOTTOM,
  };
};
