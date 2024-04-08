import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FieldType } from '../../modules/user-details/components/form/form.constants.ts';

interface SettingsState {
  searchBy: FieldType;
}

const initialState: SettingsState = {
  searchBy: FieldType.Name,
};

const settingsSlices = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSearchBy(state, action: PayloadAction<FieldType | null>) {
      state.searchBy = action.payload;
    },
  },
});

export const { setSearchBy } = settingsSlices.actions;

export default settingsSlices.reducer;
