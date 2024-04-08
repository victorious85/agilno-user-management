import React, { useCallback, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Utils
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../store/store.hooks.ts';
import { errorMessage, existingUser, validators } from './form.utils.ts';
import { showErrorAlert } from '../../../../utils';
// Store
import { addUser, updateUser } from '../../../../store/slices/users.slices.ts';
// Constants
import {
  FieldType,
  FormErrors,
  FormFields,
  ERROR_TITLE,
} from './form.constants.ts';

interface UseFormResult {
  editedUserRef: React.MutableRefObject<User.Details>;
  errors: FormErrors;
  onChangeField: (type: FieldType, text: string) => void;
  isExistedUser: boolean;
  onSave: () => void;
  onAddUser: () => void;
  keyboardVerticalOffset: number;
}

export const useForm = (
  user: User.Details,
  closeForm: () => void,
): UseFormResult => {
  const { goBack } = useNavigation<StackRouting.NavigationProp>();
  const { data: users } = useAppSelector(state => state.users);
  const dispatch = useAppDispatch(); // Get the dispatch function from react-redux
  const [errors, setErrors] = useState<FormErrors>({});
  const editedUserRef = useRef<User.Details>(user);
  const { bottom } = useSafeAreaInsets();

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

  // Handlers
  const handleAddUser = React.useCallback(() => {
    if (!isFormValid(editedUserRef.current)) {
      return;
    }

    if (existingUser(users, editedUserRef.current.email)) {
      return showErrorAlert({
        title: ERROR_TITLE,
        message: errorMessage(editedUserRef.current.email),
      });
    }

    dispatch(
      addUser({
        ...editedUserRef.current,
        id: uuidv4(),
      }),
    );
    goBack();
  }, [dispatch, goBack, isFormValid]);

  const handleSave = useCallback(() => {
    if (!isFormValid(editedUserRef.current)) {
      return;
    }
    dispatch(updateUser(editedUserRef.current));
    closeForm();
  }, [dispatch, isFormValid]);

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

  return {
    editedUserRef,
    errors,
    isExistedUser: !!user?.id,
    onChangeField: handleChange,
    onSave: handleSave,
    onAddUser: handleAddUser,
    keyboardVerticalOffset: bottom ? 110 : 75,
  };
};
