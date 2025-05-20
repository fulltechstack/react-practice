import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: [{ taskId: 1, taskName: '', taskDesc: '' }],
    reducers: {
        addTask: (state, action) => {
            state.push({ taskId: Math.random(), taskName: action.payload.name, taskDesc: action.payload.desc });
        },
        removeTask: (state, action) => {
            return state.filter(task => task.taskId !== action.payload)
        }
    }
})

export const {addTask,removeTask}  = todoSlice.actions;
export default todoSlice.reducer;