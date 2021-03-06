import * as types from '../actions/actionTypes';
import initialState from './initialState';
// =============================================================
// Reducers are pure functions that get handed the previous and a
// function and returns the next state. The same state or a 
// modified. Reducers are the ONLY thing that should be modified 
// the state. State in Redux apps should be immutable. 
// http://redux.js.org/docs/basics/Reducers.html
// =============================================================
export default function courseReducer(state = initialState.courses, action){

    // Do different things to the state based on the action type passed in.
    switch(action.type){
        case 'undefined' :
            return initialState;

        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        
        case types.CREATE_COURSE_SUCCESS:
            return [...state, Object.assign({}, action.course)];
            
        // Return a list of all the courses, EXCEPT the course that matches the id of the 
        // course we are updating.
        case types.UPDATE_COURSE_SUCCESS:
            return [...state.filter(course => course.id !== action.course.id), Object.assign({}, action.course)];

        default: 
            return state;
    }
}