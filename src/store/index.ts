import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/users.slices.ts';
import settingsReducer from './slices/settings.slices.ts';

const store = configureStore({
  reducer: {
    users: usersReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
