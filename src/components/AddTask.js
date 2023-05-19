

export default function AddTask({ Tasks, setTasks }) {
    function addTask(task) {
        let newTasks = [...Tasks, task]
        setTasks(newTasks)
    }

    return (
        <div className='task-group'>
            {"Hi"}
        </div>
    );
}