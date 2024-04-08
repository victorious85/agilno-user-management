import React, { memo } from 'react';
import { Text, TextInput, View } from 'react-native';
// Constants
import { FieldType, KeyboardTypes } from '../form/form.constants.ts';
// Styles
import styles from './form-input.styles.ts';

interface PropsT {
  type: FieldType;
  placeholder: string;
  defaultValue: string;
  error: string | undefined;
  onChangeField: (type: FieldType, text: string) => void;
}

/**
 * 🔸 Form Input Component
 */
const FormInputComponent: React.FC<PropsT> = ({
  type,
  placeholder,
  defaultValue,
  error,
  onChangeField,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{placeholder}</Text>
      <TextInput
        style={[styles.input, Boolean(error) && styles.errorBorder]}
        autoCorrect={false}
        spellCheck={false}
        defaultValue={defaultValue}
        onChangeText={text => onChangeField(type, text)}
        placeholder={placeholder}
        keyboardType={KeyboardTypes[type]}
        {...(type === FieldType.Email && { autoCapitalize: 'none' })}
      />
      {error && <Text style={styles.inputError}>{error}</Text>}
    </View>
  );
};

export default memo(FormInputComponent);
