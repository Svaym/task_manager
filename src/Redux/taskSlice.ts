import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface TaskState {
  taskArray: string[]
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
    }
  }
})
export const { addTask } = taskSlice.actions
export const selectTask = (state: RootState) => state.tasks.taskArray
export default taskSlice.reducer