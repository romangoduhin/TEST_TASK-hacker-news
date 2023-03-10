import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {idsType, InitialState} from '../types';

const initialState: InitialState = {
  newsIds: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
      setNewsIds: (state, action: PayloadAction<idsType>) => {
        const idsArr = action.payload;

        state.newsIds = idsArr;
    },
}});

export const {setNewsIds} = newsSlice.actions;
export default newsSlice.reducer;
