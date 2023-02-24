import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    value:false,
  },
  reducers: {
    setLoading: (state, action) => {
        if(action.payload===true)
          state.value = true;
        else state.value = false;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
