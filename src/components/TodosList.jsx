import React from 'react'
import TodoItem from './TodoItem'

const TodosList = ({ todos, handleChange, handleDelete,setUpdate }) => {
  return (
    <div>
        <ul>
        {
            todos.map((todo) => (
                <TodoItem key={todo.id} todo={ todo }  handleChange={ handleChange } handleDelete={ handleDelete } setUpdate={setUpdate}/>
            ))
        }
    </ul>
      
    </div>
  )
}

export default TodosList
