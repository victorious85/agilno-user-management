import { Platform } from 'react-native';

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const OSVersion = Platform.Version;

export const selectByPlatform = <T, K>(
  iosValue: T,
  androidValue: K,
): T | K | undefined =>
  Platform.select<T | K>({
    ios: iosValue,
    android: androidValue,
  });
