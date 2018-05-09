import {applyMiddleware, createStore} from "redux";
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const configureStore = () => {
    const middlewares = [thunk];
    middlewares.push(promise);
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }

    return createStore(rootReducer, /* persistedState,*/ applyMiddleware(...middlewares));
};

export default configureStore;