import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import dynamicMiddlewares from 'redux-dynamic-middlewares';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import createRootReducer from './core/reducers';

export const history = createBrowserHistory();

const routerMiddleware = createRouterMiddleware(history);
const reducers = createRootReducer(history);

const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(logger)
            .concat(routerMiddleware)
            .concat(thunk)
            .concat(dynamicMiddlewares),
});

export default store;
