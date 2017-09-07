// ======================================================================================
// The store has the following responsibilites:
// - Holds application state
// - Allows acces to state via getState();
// - Allows state to be updated via dispatch(action);
// - Registers listeners via subscribe(listener);
// - Handles unregistering of listeners via the function returned by subscribe(listener)

// http://redux.js.org/docs/basics/Store.html
// ======================================================================================

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}

