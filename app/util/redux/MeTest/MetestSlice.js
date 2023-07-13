import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const meTestSlice = createSlice({
  name: 'meTest',
  initialState,
  reducers: {
    increase(state, action) {
      state.count = state.count + action.payload
    },
    decrease(state, action) {
      state.count = state.count - action.payload
    }
  }
})

export const nowCount = state => state[meTestSlice.name].count

export const {increase, decrease} = meTestSlice.actions
export default meTestSlice.reducer
