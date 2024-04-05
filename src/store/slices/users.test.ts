import { configureStore } from '@reduxjs/toolkit';
import usersReducer, {
  addUser,
  deleteUser,
  setUsers,
  updateUser,
} from './users.slices.ts';

const initialState = {
  users: {
    users: [
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

  test('setUsers action adds users to the state', () => {
    const users = [
      {
        id: '3',
        name: 'New User 3',
        email: 'user1@example.com',
        role: 'Developer',
      },
      {
        id: '4',
        name: 'New User 4',
        email: 'user2@example.com',
        role: 'Designer',
      },
    ];

    store.dispatch(setUsers(users));

    expect(store.getState().users.users).toEqual(users);
  });

  test('addUser action adds a user to the state', () => {
    const user = {
      id: '3',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Tester',
    };

    store.dispatch(addUser(user));

    expect(store.getState().users.users).toContainEqual(user);
  });

  test('updateUser action updates a user in the state', () => {
    const updatedUser = {
      id: '2',
      name: 'Jane Smith Updated',
      email: 'jane@example.com',
      role: 'UI Designer',
    };

    store.dispatch(updateUser(updatedUser));

    expect(store.getState().users.users).toContainEqual(updatedUser);
  });

  test('deleteUser action removes a user from the state', () => {
    const userIdToDelete = '1';

    store.dispatch(deleteUser(userIdToDelete));

    expect(
      store.getState().users.users.some(user => user.id === userIdToDelete),
    ).toBe(false);
  });
});
