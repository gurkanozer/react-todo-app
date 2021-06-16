import React, { createContext, useReducer, useEffect } from 'react';
import todoReducer from './todoReducer';
import themeReducer from './themeReducer';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, CLEAR_COMPLETED, CHANGE_THEME } from './actionTypes';
import { darkTheme } from './themes';
//Initial State
const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
    ,
    theme: JSON.parse(localStorage.getItem('theme')) || darkTheme
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [todos, setTodos] = useReducer(todoReducer, initialState.todos);
    const [theme, setTheme] = useReducer(themeReducer, initialState.theme);
    //ACTIONS
    const addTodo = (payload) => {
        setTodos({ type: ADD_TODO, payload });
    }
    const updateTodo = (payload) => {
        setTodos({ type: UPDATE_TODO, payload });
    }
    const deleteTodo = (payload) => {
        setTodos({ type: REMOVE_TODO, payload });
    }
    const clearCompleted = (payload) => {
        setTodos({ type: CLEAR_COMPLETED, payload });
    }
    const changeTheme = (payload) => {
        setTheme({ type: CHANGE_THEME, payload });
    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [todos, theme]);
    return (
        <GlobalContext.Provider value={{ todos, theme, addTodo, deleteTodo, updateTodo, clearCompleted, changeTheme }}>
            {children}
        </GlobalContext.Provider>
    )
}