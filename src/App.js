import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks.js'
import { useState } from 'react';
import AddTask from './components/AddTask.js';

function App() {

  const [tasks, setTasks] = useState([
    {
      title: 'Telkom Homework',
      done: false,
    },
    {
      title: 'Progjar Homework',
      done: false,
    }
  ])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AddTask Tasks={tasks}
          setTasks={setTasks}
        />
        <Tasks Tasks={tasks}
          setTasks={setTasks}
        />
      </header>
    </div>
  );
}

export default App;
