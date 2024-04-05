import { Alert, AlertOptions } from 'react-native';

/**
 * Error Alert
 */

interface AppAlert {
  title: string;
  message?: string;
  onPress?: () => void;
  options?: AlertOptions;
}

export const showErrorAlert = (params: AppAlert) =>
  Alert.alert(
    params.title,
    params.message,
    [{ onPress: params?.onPress }],
    params.options,
  );

/**
 * Prompt Alert
 * Allow only one on screen
 */

interface PromptAlert {
  title: string;
  message?: string;
  okButtonTitle?: string;
  cancelButtonTitle?: string;
  onPress?: () => void;
  onPressCancel?: () => void;
  options?: AlertOptions;
  buttonStyle?: 'default' | 'cancel' | 'destructive';
  cancelButtonStyle?: 'default' | 'cancel' | 'destructive';
}

export const showConfirmAlert = (params: PromptAlert) => {
  const {
    title,
    message,
    cancelButtonTitle,
    okButtonTitle,
    onPressCancel = () => {},
    buttonStyle,
    cancelButtonStyle,
  } = params;

  const onPress = () => {
    params?.onPress?.();
  };

  Alert.alert(
    title,
    message,
    [
      {
        text: cancelButtonTitle || 'Cancel',
        onPress: onPressCancel,
        style: cancelButtonStyle || 'default',
      },
      {
        text: okButtonTitle || 'OK',
        onPress: onPress,
        style: buttonStyle || 'destructive',
      },
    ],
    { cancelable: false },
  );
};
