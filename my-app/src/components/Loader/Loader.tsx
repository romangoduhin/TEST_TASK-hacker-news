import React from 'react';
import {Center, Loader as MantineLoader} from "@mantine/core";

function Loader() {
    return (
        <Center>
            <MantineLoader color="yellow" size="xl" variant="dots"/>
        </Center>
    );
}

export default Loader;