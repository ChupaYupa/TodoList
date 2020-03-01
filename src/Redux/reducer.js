


export const ADD_TODOLIST = "TodoList/Reducer/ADD_TODOLIST";
export const ADD_TASK = "TodoList/Reducer/ADD_TASK";
export const UPDATE_TASK = "TodoList/Reducer/UPDATE_TASK";
export const DELETE_TODOLIST = "TodoList/Reducer/DELETE_TODOLIST";
export const DELETE_TASK = "TodoList/Reducer/DELETE_TASK";

const initialState = {
    todolists: [
        { "id": 1, "title": "One", tasks: [{ id: 1, title: "CSS", isDone: true, priority: "low", delete: "X" }] },
        { "id": 2, "title": "Two", tasks: [{ id: 1, title: "JS", isDone: true, priority: "low", delete: "X" }] },
        { "id": 3, "title": "Three", tasks: [{ id: 1, title: "React", isDone: false, priority: "high", delete: "X" }] },
        { "id": 4, "title": "four", tasks: [{ id: 1, title: "HTML", isDone: true, priority: "medium", delete: "X" }] }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST: {
            return {
                ...state,
                todolists: [...state.todolists, { ...action.newTodolist, tasks: [] }]
            }
        }
        case ADD_TASK: {
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return { ...tl, tasks: [...tl.tasks, action.newTask] }
                    } else {
                        return tl
                    }
                })
            }
        }
        case UPDATE_TASK: {
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    debugger
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(task => {
                                if (task.id === action.taskId) {
                                    return { ...task, ...action.obj }
                                } else {
                                    return task
                                }
                            })
                        }
                    } else {
                        return tl
                    }
                })
            }
        }
        case DELETE_TODOLIST: {
            return {
                ...state,
                todolists: state.todolists.filter(tl => tl.id != action.todolistId)
            }
        }
        case DELETE_TASK: {

            return {
                ...state,
                todolists: state.todolists.map(tl => {

                    if (tl.id === action.todolistId) {
                        return {
                            ...tl, tasks: tl.tasks.filter(task => task.id != action.taskId)
                        }
                    } else {
                        return tl
                    }
                })
            }
        }

    }
    return state;
}


export const addTodolistAC = (newTodolist) => {
    debugger
    return { type: ADD_TODOLIST, newTodolist };
}
export const addTaskAC = (todolistId, newTask) => {
    return { type: ADD_TASK, todolistId, newTask };
}
export const updateTaskAC = (todolistId, taskId, obj) => {
    return { type: UPDATE_TASK, todolistId, taskId, obj };
}
export const deleteTodolistAC = (todolistId) => {
    return { type: DELETE_TODOLIST, todolistId };
}
export const deleteTaskAC = (todolistId, taskId) => {
    return { type: DELETE_TASK, todolistId, taskId };
}
export default reducer;





