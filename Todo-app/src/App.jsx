import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'go for walk', description: 'at 4pm' },
    { id: 2, title: 'go for study', description: 'at 7pm' },
    { id: 3, title: 'go to bed', description: 'at 11pm' }
  ]);

  // Moved the addTodo function inside App
  function addTodo() {
    setTodos([...todos, {
      id: todos.length + 1,
      title: `Task ${todos.length + 1}`,
      description: `Random description ${Math.random()}`
    }]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(todo => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {  // Destructure props here
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;

