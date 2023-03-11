import React, {useEffect} from 'react';
import {getNewsIdsThunk} from "../../redux/thunks";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import NewsCard from "../../components/NewsCard/NewsCard";
import {Stack, Card, Center} from '@mantine/core';


function Main() {
    const dispatch = useAppDispatch()
    const {newsIds} = useAppSelector(state => state.news);

    useEffect(() => {
        dispatch(getNewsIdsThunk())
    }, []);

    return newsIds ? <Center w="100%" h='100%'>
        <Card w="80vw" bg="inherit" p="0">
            <Stack spacing="2px">
                {newsIds.map((id, ind) => <NewsCard key={id} index={ind} id={id}/>)}
            </Stack>
        </Card>
    </Center> : null
}

export default Main;