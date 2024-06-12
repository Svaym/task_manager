import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Task{
  title: string;
  desc: string;
  colour: string;
}
export interface TaskState {
  taskArray: Task[]
}
const initialState: TaskState = {
  taskArray: []
}
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskArray.push(action.payload)
    },
    removeTask: (state, action) => {
      state.taskArray = state.taskArray.filter(task => task.title !== action.payload.title);
    }
  }
})
export const { addTask, removeTask } = taskSlice.actions
export const selectTask = (state: RootState) => state.tasks.taskArray
export default taskSlice.reducer
