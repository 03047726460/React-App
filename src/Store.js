import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const middleware = {thunk};

export const store = createStore(rootReducer,initialState,composeEnhancers(applyMiddleware()));

