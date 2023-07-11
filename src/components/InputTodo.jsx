import React, { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('please add task');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={title}
          placeholder="Add Task"
          onChange={handleInputChange}
          className="input-text"
        />

        <button className="input-submit" type="submit">
          {' '}
          <FaPlusSquare />
        </button>
      </form>
      <span className="submit-warning">{message}</span>

    </>
  );
};

export default InputTodo;
