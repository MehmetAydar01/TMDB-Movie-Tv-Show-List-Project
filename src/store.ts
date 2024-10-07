import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import favListReducer from './features/favlists/favListSlice';

export const store = configureStore({
  reducer: {
    themeState: themeReducer,
    favListState: favListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
