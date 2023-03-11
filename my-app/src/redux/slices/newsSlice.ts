import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {idsType, INews, InitialState} from '../types';

const initialState: InitialState = {
    newsIds: [],
    currentNews: null,
    isSetting: false
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNewsIds: (state, action: PayloadAction<idsType>) => {
            const idsArr = action.payload;

            state.newsIds = idsArr;
            state.isSetting = false;
        },
        setCurrentNews: (state, action: PayloadAction<INews>) => {
            const news = action.payload;

            state.currentNews = news;
        },
        setIsSetting: (state, action: PayloadAction<boolean>) => {
            const bool = action.payload;

            state.isSetting = bool;
        },
    }
});

export const {setNewsIds, setIsSetting, setCurrentNews} = newsSlice.actions;
export default newsSlice.reducer;
