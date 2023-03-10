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

    return (
        <Center bg="yellow.1" p='lg'>
            <Card w="80vw" bg="white" p="0">
                <Stack spacing="2px">
                    {newsIds.length ? newsIds.map((id, ind) => <NewsCard key={id} index={ind} id={id}/>) : "Empty"}
                </Stack>
            </Card>
        </Center>
    );
}

export default Main;