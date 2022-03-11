import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditTodo from './EditTodo';

const ListTodos = () => {
  const [items, setItems] = useState([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get('http://localhost:3002/todos');
      setItems(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/todos/${id}`);
      setItems(items.filter((el) => el.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEdit = () => {};

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <table className="table mt-5 text-center">
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Edit / Delete</th>
        </tr>
      </thead>

      {items.map((el) => (
        <tbody key={el.todo_id}>
          <tr>
            <td>{el.todo_id}</td>
            <td>{el.description}</td>
            <td>
              <EditTodo />
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(el.todo_id)}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default ListTodos;
