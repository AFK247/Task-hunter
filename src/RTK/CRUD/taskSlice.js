import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTask: [],
};

const authSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    getAllTask: (state, action) => {
      state.allTask = action.payload;
    },
  },
});

export const { getAllTask } = authSlice.actions;
export default authSlice.reducer;
