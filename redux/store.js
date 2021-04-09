import { configureStore } from '@reduxjs/toolkit'
import cursorReducer from './reducers/cursor'
import loadingReducer from './reducers/loader'

export default configureStore({
  reducer: {
    cursor: cursorReducer,
    loading: loadingReducer,
  }
})
