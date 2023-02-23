import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/CounterSlice";
import PostSlice from "../state/PostSlice";
import ToDoSlice from "../state/ToDoSlice";

// Merging different Reducer together

export default configureStore({

    reducer:{
        counter:counterReducer,
        todo:ToDoSlice,
        posts:PostSlice
    }
})
