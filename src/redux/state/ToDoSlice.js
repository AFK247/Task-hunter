import { createSlice } from "@reduxjs/toolkit";

export const ToDoSlice=createSlice({

    name:"ToDo",
    initialState:{
        value:[]
    },
    reducers:{
        entry:(state,action)=>{
            state.value=  [...state.value, action.payload]
            console.log(state.value);
        },
        del:(state,action)=>{
            const index=action.payload;
            let temp=[];
            state.value.map((obj,ind)=>{
                    if(ind!==index){
                        temp.push(obj)
                    }
            })
            state.value=temp;
        },
        update:(state,action)=>{
            const data=action.payload;
            const index=data.index;
            // console.log(data.index);
            let temp=[];
            // console.log(state.value[data.index]);
            state.value.map((obj,ind)=>{
                if(ind!==index){
                    temp.push(obj)
                }
                else{
                    temp.push(data)
                    // console.log(data);
                }
        })
        state.value=temp;
            console.log(temp);
        },
    }
})


export const {entry,del,update}=ToDoSlice.actions;
export default ToDoSlice.reducer;