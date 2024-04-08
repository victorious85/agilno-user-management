import { configureStore } from '@reduxjs/toolkit';
import usersReducer, {
  addUser,
  deleteUser,
  updateUser,
  fetchUsers,
} from './users.slices.ts';

const initialState = {
  users: {
    data: [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Developer',
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'Designer',
      },
    ],
    loading: false,
    error: null,
  },
};

describe('users slice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        users: usersReducer,
      },
      preloadedState: initialState,
    });
  });

  test('initial state is correct', () => {
    expect(store.getState().users).toEqual(initialState.users);
  });

  test('addUser action adds a user to the state', () => {
    const user = {
      id: '3',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Tester',
    };

    store.dispatch(addUser(user));

    expect(store.getState().users.data).toContainEqual(user);
  });

  test('updateUser action updates a user in the state', () => {
    const updatedUser = {
      id: '2',
      name: 'Jane Smith Updated',
      email: 'jane@example.com',
      role: 'UI Designer',
    };

    store.dispatch(updateUser(updatedUser));

    expect(store.getState().users.data).toContainEqual(updatedUser);
  });

  test('deleteUser action removes a user from the state', () => {
    const userIdToDelete = '1';

    store.dispatch(deleteUser(userIdToDelete));

    expect(
      store.getState().users.data.some(user => user.id === userIdToDelete),
    ).toBe(false);
  });

  test('fetchUsers thunk adds users to the state', async () => {
    await store.dispatch(fetchUsers());
    expect(store.getState().users.loading).toBe(false);
    expect(store.getState().users.error).toBe(null);
    expect(store.getState().users.data.length).toBeGreaterThan(0);
  });
});
