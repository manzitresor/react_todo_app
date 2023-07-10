import React from 'react'
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { useState, useEffect } from 'react';
import {  v4 as uuidv4} from 'uuid'

const  TodosLogic = () => {

    const getInitialTodos = () =>{
        const temp = localStorage.getItem('todos')
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
      }

    const [todos,setTodos] = useState(getInitialTodos());

      useEffect(()=>{
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos',temp)
      },[todos])

      const handleChange = (id) => {
        setTodos((prevState) => 
            prevState.map((todo) =>{
                if(todo.id === id) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                  }
                }
                return todo;
            })
        );
    }
    const handleDelete = (id) => {
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== id
            })
        ])
    }
   const addTodoItem = (title) => {
    const newItem = {
        id: uuidv4(),
        title: title,
        completed: false,
    }
    setTodos([...todos,newItem])
   }  

   const setUpdate = (updateTitle,id) => {
       setTodos(
        todos.map((todo) => {
            if(todo.id === id){
                todo.title = updateTitle
            }
            return todo
        })
       )
   }

  return (
    <>
    <div>
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList todos={todos} handleChange={handleChange} handleDelete={handleDelete} setUpdate={setUpdate}/>
    </div>
      
    </>
  )
}

export default TodosLogic

