import { useState } from "react";


export default function AddTask({ Tasks, setTasks, highestId, setHighestId }) {

    const [title, setTitle] = useState('')

    function incrementId(increase) {
        let newId = highestId + increase
        setHighestId(newId)
        //console.log(newId)
        return newId
    }

    function addTask() {
        if (!title.replace(/\s/g, '').length) {
            alert("Please Enter Proper Task Name!")
            setTitle('')
            return
        }
        let task = {
            id: incrementId(1),
            title: title,
            done: false
        }
        let newTasks = [...Tasks, task]
        setTasks(newTasks)
        setTitle('')
    }

    return (
        <div className="form-wrapper" style={{ width: "100%", margin: "10px" }}>
            <h1>To Do List</h1>
            <form>
                <div className="form-control">
                    <input type="text"
                        name="Title"
                        value={title}
                        placeholder="Enter Task Name..."
                        onChange={(event) => setTitle(event.target.value)}
                    ></input>
                    <button type="button"
                        onClick={addTask}
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
}