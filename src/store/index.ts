import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './reducers/filter'
import contactReducer from './reducers/contacts'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contact: contactReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
