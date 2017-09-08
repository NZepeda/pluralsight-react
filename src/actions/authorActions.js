import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

// **** This is technically not an action but an 'Action Creator' because it does just that.
// **** It creates an action.
export function loadAuthorsSuccess(authors){
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}