import './task.css'


export default function Task({ task, idx, setTask }) {
    function toggleDone() {
        let newTask = { ...task, done: !task.done }
        setTask(idx, newTask)
    }
    return (
        <div className="task-card" style={task.done ? { backgroundColor: "green" } : {}}>
            <h1>
                {task.title}
            </h1>
            <div className='button-wrap'>
                <div className="check-button"
                    onClick={toggleDone}>
                    {task.done ? "Yes" : "No"}
                </div>
                <div>
                    Delete
                </div>
            </div>
        </div>
    );
}