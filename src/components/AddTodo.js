import React, { useContext, useState } from 'react';

import { TodoContext } from '../contexts/TodoContext';

const AddTodo = () => {
   const  { saveTodo} = useContext(TodoContext);
   const [todo, setTodos] = useState();

   const handleFormSubmit = e =>{
       e.preventDefault();
       saveTodo(todo);
   }

    const handleInputChange = e =>{
        setTodos({
            ...todo,
            title: e.target.value
        })
    }

    return(
             <form onSubmit={handleFormSubmit}>

              <input type="text" name="title" id="title" placeholder="Nova tarefa..." onChange={handleInputChange} />
               
             </form>
    )
}
export default AddTodo;
