import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type FavList = {
  poster_path: string;
  title: string;
  id: number;
  release_date: string;
  vote_average: number;
};

type FavState = {
  favLists: FavList[];
};

const getFavListsFromLocalStorage = (): FavList[] => {
  const item = localStorage.getItem('favLists');
  return item ? JSON.parse(item) : [];
};

const initialState: FavState = {
  favLists: getFavListsFromLocalStorage(),
};

export const favListSlice = createSlice({
  name: 'favLists',
  initialState,
  reducers: {
    getFavList: (state, action: PayloadAction<FavList>) => {
      const getItem = state.favLists.find(
        (item) => item.id === action.payload.id
      );

      if (getItem) {
        state.favLists = state.favLists.filter(
          (movie) => movie.id !== getItem.id
        );
      } else {
        state.favLists = [...state.favLists, action.payload];
      }

      localStorage.setItem('favLists', JSON.stringify(state.favLists));
    },
  },
});

export const { getFavList } = favListSlice.actions;

export default favListSlice.reducer;
