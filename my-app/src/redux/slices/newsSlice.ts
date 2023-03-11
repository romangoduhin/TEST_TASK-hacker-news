import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {idsType, InitialState} from '../types';

const initialState: InitialState = {
    newsIds: [],
    isSetting: false
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNewsIds: (state, action: PayloadAction<idsType>) => {
            const idsArr = action.payload;

            state.newsIds = idsArr;
            state.isSetting = false
        },
        setIsSetting: (state, action: PayloadAction<boolean>) => {
            const bool = action.payload;

            state.isSetting = bool;
        },
    }
});

export const {setNewsIds, setIsSetting} = newsSlice.actions;
export default newsSlice.reducer;
