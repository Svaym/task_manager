import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "@reduxjs/toolkit/query"

export interface ModalState {
  value: boolean
}
const initialState: ModalState = {
  value: false
}
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: state => {
      state.value = true
    },
    close: state => {
      state.value = false
    },
  }
})
export const { open, close } = modalSlice.actions
export const selectClick = (state: RootState) => state.modal.value
export default modalSlice.reducer