import { useSelector, useDispatch } from "react-redux";
import TodoSlice from "./feature/TodoSlice";
import { addTask, removeTask } from "./feature/TodoSlice";
function Todo() {
    const todos = useSelector(state => state.todo.tasks);
    const dispatch = useDispatch();
    console.log(todos);

    const deleteTask = (t) => {
        debugger
        dispatch(removeTask(t))
    }
    const addTaskHandler = () => {
        dispatch(addTask({ taskName: 'testt1', taskDesc: 'testD2' }))
    }
    return (<>
        <button onClick={addTaskHandler}> Add task</button>
        {todos.map(t => (
            <div key={t.id} style={{ border: "1px solid white", minWidth: "200px" }}>
                <h3 style={{ margin: 0, fontSize: "18px", color: "#333" }}>{t.taskName}</h3>
                <p style={{ marginTop: "5px", color: "#555" }}>{t.taskDesc}</p>
                <button onClick={() => deleteTask(t.id)}>delete task</button>
            </div>
        ))}

    </>);
}

export default Todo;