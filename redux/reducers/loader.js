import { createSlice } from '@reduxjs/toolkit'

// more research https://redux.js.org/tutorials/essentials/part-2-app-structure

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    isLoading: true,
  },
  reducers: {
    update: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const { update } = loaderSlice.actions
export const selectLoading = state => state.loading.isLoading

export default loaderSlice.reducer