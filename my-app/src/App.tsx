import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import News from "./pages/News/News";
import Main from "./pages/Main/Main";
import styles from "./App.module.scss"

function App() {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
        </div>
    );
}

export default App;
