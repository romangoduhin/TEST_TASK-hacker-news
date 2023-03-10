import {Box, Group, Button} from '@mantine/core';
import React from 'react';
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks";
import {getNewsIdsThunk} from "../../redux/thunks";

function NavBar() {
    const dispatch = useAppDispatch()

    function handleReloadNews() {
        dispatch(getNewsIdsThunk())
    }

    return (
        <Box w='100vw' h='70px' bg='yellow.1'>
            <Group w='100%' h='100%' position="center" spacing="xl">
                <NavLink to="/s">
                    <Button color="cyan" radius="xl" size="md" uppercase>
                        main page
                    </Button>
                </NavLink>

                <Button color="lime" radius="xl" size="md" onClick={handleReloadNews} uppercase>
                    reload news
                </Button>
            </Group>
        </Box>
    );
}

export default NavBar;