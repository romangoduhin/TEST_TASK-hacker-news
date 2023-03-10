import {Dispatch} from '@reduxjs/toolkit';
import newsAPI from "../services/newsApi";
import {setNewsIds} from "./slices/newsSlice";

export const getNewsIdsThunk = () => async (dispatch: Dispatch) => {
    const arrSize = 100;

    const storyIds = await newsAPI.getNewsIds();
    const slicedStoryIds = storyIds.slice(0,arrSize)

    if(!slicedStoryIds) return;

    dispatch(setNewsIds(slicedStoryIds));
};

export const getNewsByIdThunk = async (id: number)  => {
    const story = await newsAPI.getNewsById(id);

    if(!story) return;

    return story;
};