import { createSlice } from '@reduxjs/toolkit';
import data from '../component/todoData'
import { v4 as uuid } from "uuid";

const initialValue = data;

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: initialValue
    },reducers:{
        tambahTodo: (state, action) =>{
            const tambahTodoBaru = {    
                id: uuid(),
                title: action.payload,
                completed: false }
            state.todos = [...state.todos, tambahTodoBaru]
        },hapusTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => {return todo.id !== action.payload})
        },checkTodo: (state, action) =>{
            const todo = state.find((todo) => todo.id === action.payload); 
            todo.completed = !todo.completed;
        }
    }
})

export default todoSlice.reducer
export const {tambahTodo, hapusTodo, checkTodo} = todoSlice.actions