import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
// Utils
import { isIos } from '../../../../utils';
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
  closeForm: () => void;
}

/**
 * 🔸 Form Component
 */
const FormComponent: React.FC<PropsT> = ({ user, closeForm }) => {
  const {
    onSave,
    onAddUser,
    isExistedUser,
    editedUserRef,
    errors,
    onChangeField,
    keyboardVerticalOffset,
  } = useForm(user, closeForm);

  return (
    <KeyboardAvoidingView
      behavior={isIos ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardVerticalOffset}
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
