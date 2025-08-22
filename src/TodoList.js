import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim() === '') {
      alert('Please enter a task before adding.');
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask('');
    alert('Task added successfully!');
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
