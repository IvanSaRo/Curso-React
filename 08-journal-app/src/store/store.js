import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';

// Esta línea sirve para poder poner a la vez la configuración de redux extension y el middleware para hacer peticiones a API
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer, 
    notes: notesReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);