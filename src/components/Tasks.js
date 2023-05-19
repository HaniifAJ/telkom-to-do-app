import Task from './task.js'

export default function Tasks({ Tasks, setTasks }) {
    //const [filter, setFilter] = useState('')

    function setTask(idx, task) {
        let newTasks = [...Tasks.slice(0, idx), task, ...Tasks.slice(idx + 1)]
        setTasks(newTasks)
    }

    const tasksMarkup = Tasks.map(
        (task, idx) => {
            return (
                <Task task={task}
                    key={idx}
                    idx={idx}
                    setTask={setTask}
                />
            )
        }
    )

    return (
        <div className='task-group'>
            {tasksMarkup}
        </div>
    );
}