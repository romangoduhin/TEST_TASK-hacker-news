import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import News from "./pages/News/News";
import Main from "./pages/Main/Main";
import {ScrollArea} from '@mantine/core';
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <ScrollArea w='100vw' h='100vh' bg="yellow.1">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/news/:id" element={<News/>}/>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </ScrollArea>
    );
}

export default App;
