import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createHashHistory} from 'history';
import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import Routes from './Routes';
import createRootReducer from './reducers';
import API from "./api";

export const history = createHashHistory();

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            thunk,
            routerMiddleware(history)
        )
    )
);

window.fuckingStore = store;
window.api = API;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */}
            <Routes/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);