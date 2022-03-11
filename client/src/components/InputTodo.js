import React, { useState } from 'react';
import axios from 'axios';

const InputTodo = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: { 'Content-Type': 'application/json' },
      };

      await axios.post('http://localhost:3002/todos', {
        description: value,
        config,
      });

      setValue('');
      window.location = '/';
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5">PERN Todo List</h1>
      <form className="d-flex mt-5" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
