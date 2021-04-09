import { createSlice } from '@reduxjs/toolkit'

// more research https://redux.js.org/tutorials/essentials/part-2-app-structure

export const cursorSlice = createSlice({
  name: 'cursor',
  initialState: {
    cursor: 'new'
  },
  reducers: {
    update: (state, action) => {
      state.cursor = action.payload
    }
  }
})

export const { update } = cursorSlice.actions
export const selectCursor = state => state.cursor.cursor

export default cursorSlice.reducer