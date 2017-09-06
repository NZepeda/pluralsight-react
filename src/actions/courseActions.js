// ==========================================================================
// Actions are payloads of information that send data from the application to
// the store. Actions should be the ONLY source of information for the store.
// You send them to the store using store.dispatch()
// http://redux.js.org/docs/basics/Actions.html
// ==========================================================================


// Actions must have a type property that indication the type of action
// being performed.

// **** This is technically not an action but an 'Action Creator' because it does just that.
// **** It creates an action.
export function createCourse(course){
    return {type: 'CREATE_COURSE', course};
}