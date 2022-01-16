import React from 'react';
import './App.css';
import TodoProvider from './contexts/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const  App = () => {
  return (
            <TodoProvider>
                <TodoList></TodoList>
                <br />
                <hr />
                <br />
                <AddTodo></AddTodo>
            </TodoProvider>
  );
}
export default App;
