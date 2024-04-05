import React, { useCallback, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// Constants
import { Routes } from '../../navigation';
import {
  ALERT_MESSAGE,
  ALERT_TITLE,
  DELETE_BUTTON_TITLE,
} from './users.constants.tsx';
// Store
import { deleteUser } from '../../store/slices/users.slices.ts';
// Utils
import { showConfirmAlert } from '../../utils';
import { getFilteredUsersData } from './users.utils.ts';
// Hooks
import { useAppDispatch, useAppSelector } from '../../store/store.hooks.ts';

interface UseUsersResult {
  usersData: User.Details[];
  onItemPress: (id: User.Details) => void;
  onActionPress: (id: string) => void;
  updateSearchKey: (text: string) => void;
  onPressAddUser: () => void;
  isShowBlankContent: boolean;
}

const useUsers = (): UseUsersResult => {
  const { users } = useAppSelector(state => state.users);
  const { searchBy } = useAppSelector(state => state.settings);
  const [search, setSearch] = useState('');

  const { navigate } = useNavigation<StackRouting.NavigationProp>();
  const dispatch = useAppDispatch();

  const handleItemPress = useCallback(
    (user: User.Details) => {
      navigate(Routes.UserDetails, { user });
    },
    [navigate],
  );

  const handleActionItemPress = useCallback(
    (id: string) => {
      showConfirmAlert({
        title: ALERT_TITLE,
        message: ALERT_MESSAGE,
        okButtonTitle: DELETE_BUTTON_TITLE,
        onPress: () => dispatch(deleteUser(id)),
      });
    },
    [dispatch],
  );

  const handlePressAddUser = React.useCallback(() => {
    navigate({
      name: Routes.UserDetails,
      params: { user: { id: '', name: '', email: '', role: '' } },
    });
  }, [navigate]);

  const usersData = useMemo(
    () =>
      (search &&
        users?.length &&
        getFilteredUsersData(users, searchBy, search)) ||
      users,
    [search, users],
  );

  return {
    usersData,
    onItemPress: handleItemPress,
    onPressAddUser: handlePressAddUser,
    onActionPress: handleActionItemPress,
    updateSearchKey: setSearch,
    isShowBlankContent: !usersData.length,
  };
};

export default useUsers;
