import {Center, Card, Text, Stack, Group} from '@mantine/core';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {NavLink, useParams} from "react-router-dom";
import {formatDate} from "../../helpers/formatDate";
import {getNewsByIdThunk} from "../../redux/thunks";
import {setCurrentNews} from "../../redux/slices/newsSlice";
import Comment from "../../components/Comment/Comment";

function News() {
    const {id} = useParams();

    const dispatch = useAppDispatch();

    const {currentNews} = useAppSelector(state => state.news);

    const title = currentNews?.title;
    const url = currentNews?.url;
    const time = currentNews?.time;
    const author = currentNews?.by;
    const comments = currentNews?.kids;
    const commentsCount = comments?.length;

    async function setNewsData(id: number) {
        const data = await getNewsByIdThunk(id);

        dispatch(setCurrentNews(data));
    }

    useEffect(() => {
        if (!currentNews && id) {
            setNewsData(+id)
        }
    }, []);

    if (!currentNews) return null;

    return currentNews ? <Center w="100%" h='100%'>
        <Card w="80vw" h="100%" withBorder>
            <Stack mb='lg'>
                <Text fz="30px" weight={500}>{title}</Text>

                {url && <NavLink to={url}>
                    <Text c="blue.2" fz="20px" td="underline" weight={300}>Source: {url}</Text>
                </NavLink>}

                <Group position="center" spacing="xl" grow>
                    {time && <Text fz="20px" weight={500}>Posted: {formatDate(time)}</Text>}
                    {author && <Text fz="20px" weight={500}>Author: {author}</Text>}
                </Group>
            </Stack>

            <Text fz="30px" weight={500}>Comments ({commentsCount}):</Text>
            {comments && <Stack>
                {comments.map(id => <Comment key={id} id={id}/>)}
            </Stack>
            }
        </Card>
    </Center> : null;
}

export default News;