import {Center, Card, Text, Group, Stack} from '@mantine/core';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import Loader from "../../components/Loader/Loader";
import {NavLink, useParams} from "react-router-dom";
import {formatDate} from "../../helpers/formatDate";
import {getNewsByIdThunk} from "../../redux/thunks";
import {setCurrentNews} from "../../redux/slices/newsSlice";

function News() {
    const {id} = useParams();

    const dispatch = useAppDispatch();

    const {currentNews} = useAppSelector(state => state.news);

    async function setNewsData(id: string) {
        const numericId = +id;

        const data = await getNewsByIdThunk(numericId);

        dispatch(setCurrentNews(data));
    }

    useEffect(() => {
        if (!currentNews && id) {
            setNewsData(id)
        }
    }, []);

    return (
        <Center w="100vw" h="calc(100vh - 80px)">
            {currentNews
                ? <Card w="80vw" h="100%">
                    <Group>
                        <Stack>
                            <NavLink to={currentNews.url}>
                                <Text fz="20px" td="underline" weight={300}>{currentNews.url}</Text>
                            </NavLink>
                            <Text fz="30px" weight={500}>{currentNews.title}</Text>
                            <Text fz="20px" weight={300}>{formatDate(currentNews.time)}</Text>
                            <Text fz="20px" weight={300}>Author: {currentNews.by}</Text>
                        </Stack>

                    </Group>
                </Card>
                : <Loader/>
            }
        </Center>
    );
}

export default News;