import React, {useCallback, useRef, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Hooks
import {useAppDispatch} from '../../../../store/hooks';
import {addUser, updateUser} from '../../../../store/slices/users-slices.ts';
import {validators} from './form.utils.ts';
// Constants
import {
  Placeholders,
  FieldType,
  FormErrors,
  FormFields,
} from './form.constants.ts';
// Components
import {FormInput} from '../form-input';

interface PropsT {
  user: User.Details;
}
/**
 * 🔸 Form Component
 */
const FormComponent: React.FC<PropsT> = ({user}) => {
  const {goBack} = useNavigation<StackRouting.NavigationProp>();

  const dispatch = useAppDispatch(); // Get the dispatch function from react-redux
  const [errors, setErrors] = useState<FormErrors>({});
  const editedUserRef = useRef<User.Details>(user);

  const isFormValueValid = useCallback(
    (type: FieldType, value: string) => {
      const validationError = validators[type];
      setErrors(prevState => ({
        ...prevState,
        [type]: validationError(type, value),
      }));

      return !validationError(type, value);
    },
    [setErrors],
  );

  const isFormValid = useCallback(
    (user: User.Details): boolean => {
      return FormFields.reduce((acc, item) => {
        return isFormValueValid(item, user?.[item]) && acc;
      }, true);
    },
    [isFormValueValid],
  );

  const handleAddUser = React.useCallback(() => {
    // Dispatch the addUser action with the new user object
    if (!isFormValid(editedUserRef.current)) {
      return;
    }
    dispatch(
      addUser({
        id: uuidv4(),
        name: editedUserRef.current?.name,
        role: editedUserRef.current?.role,
        email: editedUserRef.current?.email,
      }),
    );
    goBack();
  }, [dispatch, goBack, isFormValid]);

  const handleSave = useCallback(() => {
    // Dispatch the updateUser action with the edited user data
    if (!isFormValid(editedUserRef.current)) {
      return;
    }
    dispatch(updateUser(editedUserRef.current));
    goBack();
  }, [dispatch, goBack, isFormValid]);

  const handleChange = useCallback(
    (type: FieldType, value: string) => {
      editedUserRef.current = {
        ...editedUserRef.current,
        [type]: value,
      };
      if (errors[type]) {
        isFormValueValid(type, value);
      }
    },
    [errors, isFormValueValid],
  );

  return (
    <>
      {FormFields.map(field => (
        <FormInput
          key={field} // Assuming you have a unique key for each FormInput
          placeholder={Placeholders[field]}
          type={field}
          defaultValue={editedUserRef.current?.[field]} // It seems like you're always using the name, consider using field instead
          error={errors[field]}
          handleChange={handleChange}
        />
      ))}
      <Button
        title={user?.id ? 'Update' : 'Add User'}
        onPress={user?.id ? handleSave : handleAddUser}
      />
    </>
  );
};

export default FormComponent;
