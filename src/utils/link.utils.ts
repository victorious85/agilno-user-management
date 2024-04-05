import { Linking } from 'react-native';

export const openURL = async (url: string | null) => {
  if (!url) {
    throw new Error(`Wrong url ${url}`);
  }

  try {
    const isUrlOpened = await Linking.openURL(url);
    return isUrlOpened;
  } catch (error) {
    console.error(`Failed to open ${url}`, error);
  }
  return false;
};

export const transformEmail = (email: string) =>
  email ? `mailto:${email}` : null;

export const handleEmailPress = (email: string) =>
  openURL(transformEmail(email));
