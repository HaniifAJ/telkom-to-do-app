import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks.js'
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask.js';

function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  // let buffer = JSON.parse(localStorage.getItem('tasks'));
  // if (buffer !== null) {
  //   setTasks(buffer);
  // }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function checkHighestId() {
    let local_highest_id = 0
    for (let task of tasks) {
      local_highest_id = Math.max(local_highest_id, task.id)
    }
    return local_highest_id
  }

  const [highestId, setHighestId] = useState(checkHighestId())

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <AddTask Tasks={tasks}
            setTasks={setTasks}
            highestId={highestId}
            setHighestId={setHighestId}
          />
          <Tasks Tasks={tasks}
            setTasks={setTasks}
          />
        </div>
        <br />
        <p>
          Haniif Ahmad Jauhari | 5025201224 | Institut Teknologi Sepuluh Nopemeber
        </p>
      </header>
    </div>
  );
}

export default App;
