import {v4 as uuidv4} from 'uuid';

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UsersInitialState {
  users: User.Details[];
}

const initialState: UsersInitialState = {
  users: [
    {
      id: uuidv4(),
      name: 'Viktor',
      email: 'v.p.kurochka@gmail.com',
      role: 'Developer',
    },
    {
      id: uuidv4(),
      name: 'Yukon',
      email: 'yukon@gmail.com',
      role: 'Manager',
    },
    {
      id: uuidv4(),
      name: 'Lionel',
      email: 'lionel@gmail.com',
      role: 'QA',
    },
    {
      id: uuidv4(),
      name: 'Brendon',
      email: 'brendon@gmail.com',
      role: 'Designer',
    },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
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

export const {setUsers, addUser, updateUser, deleteUser} = usersSlice.actions;
export default usersSlice.reducer;
