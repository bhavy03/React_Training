import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello world" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    // it is the name of the slice
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer
// this registers the reducers





// initialState is how the store looks initially
// whethter have a value or empty
// slice is just reduxtoolkit name for reducers or say big version of reducers
// nanoid method genertes uniq id