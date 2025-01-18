import React from 'react';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div>
      <header>
        <h1>Task Manager</h1>
        <button>Add Task</button>
      </header>
      <main className="container">
        <TaskList />
      </main>
    </div>
  );
};

export default App;
