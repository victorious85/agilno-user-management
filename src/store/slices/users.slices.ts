import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockUsers } from './users.mock.ts';

export interface UsersInitialState {
  users: User.Details[];
}

const usersSlice = createSlice({
  name: 'users',
  initialState: mockUsers,
  reducers: {
    setUsers(state, action: PayloadAction<User.Details[]>) {
      state.users = action.payload;
    },
    addUser(state, action: PayloadAction<User.Details>) {
      state.users.push(action.payload);
    },
    updateUser(state, action: PayloadAction<User.Details>) {
      const updatedUser = action.payload;
      const index = state.users.findIndex(user => user.id === updatedUser.id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
    deleteUser(state, action: PayloadAction<string>) {
      const userIdToDelete = action.payload;
      state.users = state.users.filter(user => user.id !== userIdToDelete);
    },
  },
});

export const { setUsers, addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
