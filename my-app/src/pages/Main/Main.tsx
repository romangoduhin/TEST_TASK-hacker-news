import React, {useEffect} from 'react';
import {getNewsIdsThunk} from "../../redux/thunks";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import NewsCard from "../../components/NewsCard/NewsCard";
import styles from "./Main.module.scss";
import { Stack } from '@mantine/core';

function Main() {
    const dispatch = useAppDispatch()
    const {newsIds} = useAppSelector(state => state.news);

    useEffect(() => {
        dispatch(getNewsIdsThunk())
    }, []);

    return (
        <Stack className={styles.stack}>
            {newsIds.length ? newsIds.map(id => <NewsCard key={id} id={id}/>) : "Empty"}
        </Stack>
    );
}

export default Main;