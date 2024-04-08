import { configureStore } from '@reduxjs/toolkit';
import settingsReducer, { setSearchBy } from './settings.slices';
// Namespace
import { FieldType } from '../../modules/user-details/components/form/form.constants.ts';

describe('settings slice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        settings: settingsReducer,
      },
    });
  });

  test('initial state is correct', () => {
    const initialState = {
      searchBy: FieldType.Name,
    };
    expect(store.getState().settings).toEqual(initialState);
  });

  test('setSearchBy action sets searchBy field correctly', () => {
    // Dispatch the setSearchBy action with a new searchBy field value
    const newSearchBy = FieldType.Email;
    store.dispatch(setSearchBy(newSearchBy));

    // Check if the searchBy field in the state is updated correctly
    expect(store.getState().settings.searchBy).toEqual(newSearchBy);
  });
});
