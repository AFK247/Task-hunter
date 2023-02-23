import { createSlice } from "@reduxjs/toolkit";
    
export const UserSlice=createSlice({

    name:"user",
    initialState:{
        value:{}
    },
    reducers:{
        increment:(state)=>{
            state.value=state.value+1;
        },
        decrement:(state)=>{
            state.value=state.value-1;
        }
    }

})

export const {increment,decrement} =UserSlice.actions;
export default UserSlice.reducer;