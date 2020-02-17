import { createStore, combineReducers } from "redux";


const ADD_TODOLIST = 'ADD_TODOLIST';

const initialState = {
    todolists: [
        { "id": 0, "title": "One" },
        { "id": 1, "title": "Two" },
        { "id": 2,  "title": "Three" },
        { "id": 3, "title": "four" }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST: {
            return {
                ...state,
                todolists: [...state.todolists, (action.newTodolist)]
            }
        }

    }
    return state;
}
export default reducer;


export const store = createStore(combineReducers({
    list: reducer
}));


export const addTodoListAC = (newTodolist) => ({
    type: ADD_TODOLIST, newTodolist
});