import React from 'react';
import {Center, Loader as MantineLoader} from "@mantine/core";

function Loader() {
    return (
        <Center w="100%" h="100%">
            <MantineLoader color="yellow" size="xl" variant="dots"/>
        </Center>
    );
}

export default Loader;