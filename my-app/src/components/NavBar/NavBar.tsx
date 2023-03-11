import React from 'react';
import {Box, Group, Button} from '@mantine/core';
import {NavLink, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getNewsByIdThunk, getNewsIdsThunk} from "../../redux/thunks";
import {setCurrentNews, setIsSetting} from "../../redux/slices/newsSlice";

function NavBar() {
    const location = useLocation();

    const dispatch = useAppDispatch();

    const {isSetting, currentNews} = useAppSelector(state => state.news);

    const isMainPage = location.pathname === '/';

    function handleReloadNews() {
        dispatch(setIsSetting(true));
        dispatch(getNewsIdsThunk(true));
    }

    async function handleReloadCurrentNews() {
        if (!currentNews) return null;

        const id = currentNews.id;

        dispatch(setIsSetting(true));

        const news = await getNewsByIdThunk(id, true);

        if (!news) {
            dispatch(setIsSetting(false));
            return
        }
        dispatch(setCurrentNews(news));
    }

    return (
        <Box w='100vw' h='70px' bg='yellow.1'>
            <Group w='100%' h='100%' position="center" spacing="xl">
                <NavLink to="/">
                    <Button color="cyan" radius="xl" size="md" uppercase>
                        main page
                    </Button>
                </NavLink>

                <Button disabled={isSetting || !isMainPage}
                        loading={isSetting && isMainPage}
                        color="lime"
                        radius="xl"
                        size="md"
                        onClick={handleReloadNews}
                        uppercase
                >
                    reload news
                </Button>

                <Button disabled={isMainPage}
                        loading={isSetting && !isMainPage}
                        color="green"
                        radius="xl"
                        size="md"
                        onClick={handleReloadCurrentNews}
                        uppercase
                >
                    reload comments
                </Button>
            </Group>
        </Box>
    );
}

export default NavBar;