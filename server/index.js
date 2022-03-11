import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
// create a todo item
app.post('/todos', async (req, res) => {
  try {
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [req.body.description]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// get all todo items
app.get('/todos', async (req, res) => {
  try {
    const getTodos = await pool.query('SELECT * FROM todo');
    res.send(getTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// get a todo by id
app.get('/todos/:id', async (req, res) => {
  try {
    const getTodo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
      req.params.id,
    ]);
    res.send(getTodo.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// update a todo item
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateTodo = await pool.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2',
      [description, id]
    );
    res.json('Todo was updated!');
  } catch (error) {
    console.log(error.message);
  }
});

// delete todo item
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
    res.json('Todo was deleted!');
  } catch (error) {
    console.log(error.message);
  }
});

app.get('/', (req, res) => {
  res.send(`API running on port 3002`);
});

app.listen(3002, () => {
  console.log('Server running on port 3002');
});
