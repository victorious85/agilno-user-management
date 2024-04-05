import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
// Utils
import { isIos } from '../../../../utils/platform.utils.ts';
import { useForm } from './useform.hook.ts';
// Constants
import {
  Placeholders,
  FormFields,
  UPDATE_BUTTON_TITLE,
  ADD_BUTTON_TITLE,
} from './form.constants.ts';
// Components
import { Button } from '../../../../shared/components/button';
import { FormInput } from '../form-input';
// Assets
import UserPlus from '../../../../shared/assets/icons/user-plus.svg';
import Save from '../../../../shared/assets/icons/save.svg';
// Styles
import styles from './form.styles.ts';

interface PropsT {
  user: User.Details;
}

/**
 * 🔸 Form Component
 */
const FormComponent: React.FC<PropsT> = ({ user }) => {
  const {
    onSave,
    onAddUser,
    isExistedUser,
    editedUserRef,
    errors,
    onChangeField,
  } = useForm(user);

  return (
    <KeyboardAvoidingView
      behavior={isIos ? 'padding' : 'height'}
      keyboardVerticalOffset={85}
      style={styles.container}>
      <View>
        {FormFields.map(field => (
          <FormInput
            key={field}
            placeholder={Placeholders[field]}
            type={field}
            defaultValue={editedUserRef.current?.[field]}
            error={errors[field]}
            onChangeField={onChangeField}
          />
        ))}
      </View>
      <Button
        icon={isExistedUser ? Save : UserPlus}
        title={isExistedUser ? UPDATE_BUTTON_TITLE : ADD_BUTTON_TITLE}
        onPress={isExistedUser ? onSave : onAddUser}
      />
    </KeyboardAvoidingView>
  );
};

export default FormComponent;
