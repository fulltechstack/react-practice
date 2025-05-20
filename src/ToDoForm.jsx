import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./slice/TodoSlice";

function ToDoForm() {

    const dispatcher = useDispatch();

    const state = useSelector(state => state.todo);

    let [task, setTask] = useState({ name: '', desc: '' });

    const nameHandler = (e) => {
        setTask({ ...task, name: e.target.value })
    }

    const descHandler = (e) => {
        setTask({ ...task, desc: e.target.value })
    }

    const addTaskHandler = (e) => {
        e.preventDefault();
        console.log('before add: ', state);
        dispatcher(addTask(task));
        console.log('after add: ', state);
    }


    return (<>
        <form>
            <input onChange={nameHandler} placeholder="Task name" type="text" />
            <input onChange={descHandler} placeholder="Task description" type="text" />
            <button onClick={addTaskHandler}>Add task</button>

        </form>

        <h1> Tasks </h1>


    </>);

}

export default ToDoForm;