import Task from './task.js'

export default function Tasks({ Tasks, setTasks }) {
    //const [filter, setFilter] = useState('')

    function setTask(id, newTask) {
        let newTasks = Tasks.map((task) => {
            if (task.id === id) return newTask
            return task
        })
        console.log(newTasks)
        setTasks(newTasks)
    }

    function deleteTask(id) {
        let newTasks = Tasks.filter((task) => task.id !== id)
        console.log(newTasks)
        setTasks(newTasks)
    }

    const tasksMarkup = Tasks.map(
        (task) => {
            return (
                <Task task={task}
                    key={task.id}
                    id={task.id}
                    setTask={setTask}
                    deleteTask={deleteTask}
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