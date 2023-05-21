import './task.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Task({ task, id, setTask, deleteTask }) {
    function toggleDone() {
        let newTask = { ...task, done: !task.done }
        setTask(id, newTask)
    }
    return (
        <div className="task-card" style={task.done ? { backgroundColor: "#32CD32" } : {}}>
            <h2 className='title-box'>
                {task.title}
            </h2>
            <div className='button-wrap'>
                <div>
                    {
                        task.done ?
                            <CheckBoxIcon
                                fontSize='large'
                                className="check-button"
                                onClick={toggleDone}>
                            </CheckBoxIcon>
                            :
                            <CheckBoxOutlineBlankIcon
                                fontSize='large'
                                className="check-button"
                                onClick={toggleDone}>
                            </CheckBoxOutlineBlankIcon>
                    }
                </div>
                <div>
                    <DeleteIcon className='check-button'
                        onClick={() => deleteTask(id)}>
                        Delete
                    </DeleteIcon>
                </div>
            </div>
        </div>
    );
}