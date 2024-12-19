import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterslice'
import todoReducer from './todoSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
})