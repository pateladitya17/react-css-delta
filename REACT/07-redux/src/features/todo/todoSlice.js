import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: "abc", task: "Learn Redux", isDone: false}],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo); // direct mutation not need to copy array like [...todo, newTodo]
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        marksAsDone: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo) {
                todo.isDone = !todo.isDone; // toggle done
            }
        }
    }
});

export const { addTodo, deleteTodo, marksAsDone } = todoSlice.actions;

export default todoSlice.reducer;