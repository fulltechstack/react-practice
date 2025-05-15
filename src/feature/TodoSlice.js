import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [{
            id: 0,
            taskName: 'test',
            taskDesc: 'test desc'
        }]
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Math.random() * 10,
                taskName: action.payload.taskName,
                taskDesc: action.payload.taskDesc
            });
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(t => {
                debugger
                return t.id !== action.payload
            })
        }
    }
});

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;