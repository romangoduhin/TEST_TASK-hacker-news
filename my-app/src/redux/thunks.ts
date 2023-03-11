import {Dispatch} from '@reduxjs/toolkit';
import newsAPI from "../services/newsApi";
import {setIsSetting, setNewsIds} from "./slices/newsSlice";
import {showNotification} from "../helpers/showNotification";

export const getNewsIdsThunk = (isUpdate?: boolean) => async (dispatch: Dispatch) => {
    const arrSize = 100;

    const storyIds = await newsAPI.getNewsIds();

    if(!storyIds) {
        dispatch(setIsSetting(false))
        return
    }

    const slicedStoryIds = storyIds.slice(0, arrSize)

    dispatch(setNewsIds(slicedStoryIds));

    isUpdate && showNotification('News Updated')
};

export const getNewsByIdThunk = async (id: number) => {
    const story = await newsAPI.getNewsById(id);

    if (!story) return;

    return story;
};

export const getCommentByIdThunk = async (id: number) => {
    const comment = await newsAPI.getCommentById(id);

    if (!comment) return;

    return comment;
};

