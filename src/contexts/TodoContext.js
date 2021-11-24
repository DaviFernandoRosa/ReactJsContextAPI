import React, { useState, createContext } from "react";

export const TodoContext = createContext();


const TodoProvider = ({children}) =>{

    const [todos, setTodos] = useState([
        {id: 1, title: 'Ir ao supermercado', done: false},
        {id: 1, title: 'Ir a Loja', done: false},
        {id: 1, title: 'Ir ao Banco', done: false},

    ]);

    const saveTodo = todo => {
        const newTodo = {
            id: todos.length +1,
            title: todo.title,
            done: false,
        };
        setTodos([...todos, newTodo]);
    }
    return(
        <TodoContext value={todos, saveTodo}>
             {children}
        </TodoContext>
    )
}

export default TodoProvider;
