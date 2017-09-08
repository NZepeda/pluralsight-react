import * as types from '../actions/actionTypes';
import initialState from './initialState';

// =============================================================
// Reducers are pure functions that get handed the previous and a
// function and returns the next state. The same state or a 
// modified. Reducers are the ONLY thing that should be modified 
// the state. State in Redux apps should be immutable. 
// http://redux.js.org/docs/basics/Reducers.html
// =============================================================
export default function authorReducer(state = initialState.authors, action){

    // Do different things to the state based on the action type passed in.
    switch(action.type){
        case 'undefined' :
            return initialState;

        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;

        default: 
            return state;
    }
}