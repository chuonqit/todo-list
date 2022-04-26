import { createSelector } from '@reduxjs/toolkit';
import { appSelector, setTheme } from './appReducer';

export const getTheme = createSelector(appSelector, (state) => state.theme);

export const mapStateToProps = (state) => {
  return {
    theme: getTheme(state),
  };
};

export const mapDispatchToProps = {
  setTheme,
};
