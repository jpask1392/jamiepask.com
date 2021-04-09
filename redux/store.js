import { configureStore } from '@reduxjs/toolkit'
import cursorReducer from './reducers/cursor'

export default configureStore({
  reducer: {
    cursor: cursorReducer
  }
})
