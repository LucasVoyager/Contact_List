import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  terme?: string
}

const initialState: FilterState = {
  terme: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerme: (state, action: PayloadAction<string>) => {
      state.terme = action.payload
    }
  }
})

export const { changeTerme } = filterSlice.actions
export default filterSlice.reducer
