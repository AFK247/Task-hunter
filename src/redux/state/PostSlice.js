import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts",async()=>{
    const res =await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
})

export const PostSlice=createSlice({
    name:"posts",
    initialState:{
        error:null,
        isLoading:false,
        posts:[]
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.isLoading=true;
        })

        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.posts=action.payload;
            state.error=null;
        })
        
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.isLoading=false;
            state.posts=[];
            state.error=action.error.message;
        })
    }
})

export default PostSlice.reducer;