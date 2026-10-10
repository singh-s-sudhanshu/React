import React, { useState } from 'react';

function App() {
  // State for input field value
  const [inputTask, setInputTask] = useState('');
  // State for storing the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new task
  const addTodo = (e) => {
    e.preventDefault();
    if (inputTask.trim() === '') return; // Do not add empty tasks

    const newTask = {
      id: Date.now(),
      text: inputTask,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setInputTask(''); // Clear input field
  };

  // Function to delete a task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to toggle task completion
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>To-Do App</h2>

      {/* Form to add tasks */}
      <form onSubmit={addTodo} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          placeholder="Add a new task..."
          style={{ flex: 1, padding: '8px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#007BFF', color: '#white', border: 'none', borderRadius: '4px' }}>
          Add
        </button>
      </form>

      {/* List of tasks */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.length === 0 ? (
          <p style={{ color: '#775' }}>No tasks yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px',
                borderBottom: '1px solid #eee',
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#888' : '#000',
              }}
            >
              <span
                onClick={() => toggleComplete(todo.id)}
                style={{ cursor: 'pointer', flex: 1 }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;