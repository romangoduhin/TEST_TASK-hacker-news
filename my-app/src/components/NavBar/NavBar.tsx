import {Box, Group, Button} from '@mantine/core';
import React from 'react';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getNewsIdsThunk} from "../../redux/thunks";
import {setIsSetting} from "../../redux/slices/newsSlice";

function NavBar() {
    const dispatch = useAppDispatch();
    const {isSetting} = useAppSelector(state => state.news);

    function handleReloadNews() {
        dispatch(setIsSetting(true));
        dispatch(getNewsIdsThunk(true));
    }

    return (
        <Box w='100vw' h='70px' bg='yellow.1'>
            <Group w='100%' h='100%' position="center" spacing="xl">
                <NavLink to="/s">
                    <Button color="cyan" radius="xl" size="md" uppercase>
                        main page
                    </Button>
                </NavLink>

                <Button disabled={isSetting} loading={isSetting} color="lime" radius="xl" size="md" onClick={handleReloadNews} uppercase>
                    reload news
                </Button>
            </Group>
        </Box>
    );
}

export default NavBar;