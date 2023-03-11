import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {MantineProvider} from '@mantine/core';
import {Notifications} from '@mantine/notifications';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <MantineProvider withNormalizeCSS withGlobalStyles>
                <Notifications position="top-right"/>
                <App/>
            </MantineProvider>
        </BrowserRouter>
    </Provider>
);
