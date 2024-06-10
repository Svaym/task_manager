import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import taskSlice from "./taskSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    tasks: taskSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

