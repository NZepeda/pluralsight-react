// =============================================================
// Reducers are pure functions that get handed the previous and a
// function and returns the next state. The same state or a 
// modified. Reducers are the ONLY thing that should be modified 
// the state. State in Redux apps should be immutable. 
// http://redux.js.org/docs/basics/Reducers.html
// =============================================================
export default function courseReducer(state = [], action){

    // Redux calls the reducer with an undefined state for the first time.
    // Here we can return the initial state of the app.
    const initialState = [];

    // Do different things to the state based on the action type passed in.
    switch(action.type){
        case 'undefined' :
            return initialState;

        case 'CREATE_COURSE' :
            return [...state,
                Object.assign({}, action.course)];

        default: 
            return state;
    }
}