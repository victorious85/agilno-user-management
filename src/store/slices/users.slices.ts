import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { formatFetchedData } from '../helpers/users.helper.ts';

export interface UsersState {
  data: User.Details[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await response.json();
    return formatFetchedData(users);
  } catch (error) {
    throw Error('Failed to fetch users');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addUser(state, action: PayloadAction<User.Details>) {
      state.data.push(action.payload);
    },
    updateUser(state, action: PayloadAction<User.Details>) {
      const updatedUser = action.payload;
      const index = state.data.findIndex(user => user.id === updatedUser.id);
      if (index !== -1) {
        state.data[index] = updatedUser;
      }
    },
    deleteUser(state, action: PayloadAction<string>) {
      const userIdToDelete = action.payload;
      state.data = state.data.filter(user => user.id !== userIdToDelete);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch users';
      });
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
