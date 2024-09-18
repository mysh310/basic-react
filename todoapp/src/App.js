import React, { useState } from 'react';
import { Button, TextField, List, ListItem, Typography } from '@mui/material';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload
    if (input.trim() !== '') {
      setTodos([...todos, input]); // Add new task to the list
      setInput(''); // Clear the input field
      console.log(todos)
    }
  }

  return (
    <div>
      <Typography variant="h4">My To-Do List</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter a task"
          variant="outlined"
          dense
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>{todo}</ListItem>
        ))}
      </List>
    </div>
  )
}