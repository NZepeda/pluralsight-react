// ==========================================================================
// Actions are payloads of information that send data from the application to
// the store. Actions should be the ONLY source of information for the store.
// You send them to the store using store.dispatch()
// http://redux.js.org/docs/basics/Actions.html
// ==========================================================================


// Actions must have a type property that indication the type of action
// being performed.
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

// **** This is technically not an action but an 'Action Creator' because it does just that.
// **** It creates an action.
export function loadCoursesSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

