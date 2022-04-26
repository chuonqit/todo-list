import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  theme: 'light',
};

const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state) => {
      state.status = 'loading';
    },
    setThemeSuccess: (state, action) => {
      state.status = 'loading';
      state.theme = action.payload;
    },
  },
});

export const appSelector = (state) => state.app;

export const { setTheme, setThemeSuccess } = appReducer.actions;

export default appReducer.reducer;
