import {Dispatch} from '@reduxjs/toolkit';
import newsAPI from "../services/newsApi";
import {setIsSetting, setNewsIds} from "./slices/newsSlice";
import {notifications} from "@mantine/notifications";

export const getNewsIdsThunk = (isUpdate?: boolean) => async (dispatch: Dispatch) => {
    const arrSize = 100;

    const storyIds = await newsAPI.getNewsIds();

    if(!storyIds) {
        dispatch(setIsSetting(false))
        return
    }

    const slicedStoryIds = storyIds.slice(0, arrSize)

    dispatch(setNewsIds(slicedStoryIds));

    isUpdate && notifications.show({
        title: 'News updated',
        message: ''
    })
};

export const getNewsByIdThunk = async (id: number) => {
    const story = await newsAPI.getNewsById(id);

    if (!story) return;

    return story;
};
