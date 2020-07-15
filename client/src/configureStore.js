import{applyMiddleware, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer from './reducers'

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});

export default function configureStore(persistedState) {
    const store = createStore(
        rootReducer,
        persistedState,
        composeEnhancers(applyMiddleware(thunkMiddleWare)))
    return store
}