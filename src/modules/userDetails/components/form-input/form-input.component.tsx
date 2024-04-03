import React from 'react';
import {Text, TextInput, View} from 'react-native';
// Constants
import {FieldType} from '../user-details.constants.ts';
// Styles
import Styles from './gorm-input.styles.ts';

interface PropsT {
  type: FieldType;
  placeholder: string;
  defaultValue: string;
  error: string | undefined;
  handleChange: (type: FieldType, text: string) => void;
}

/**
 * 🔸 Form Input Component
 */
const FormInputComponent: React.FC<PropsT> = ({
  type,
  placeholder,
  defaultValue,
  error,
  handleChange,
}) => {
  return (
    <View style={Styles.container}>
      <TextInput
        style={[Styles.input, Boolean(error) && Styles.errorBorder]}
        autoCorrect={false}
        defaultValue={defaultValue}
        onChangeText={text => handleChange(type, text)}
        placeholder={placeholder}
      />
      {error && <Text style={Styles.inputError}>{error}</Text>}
    </View>
  );
};

export default FormInputComponent;