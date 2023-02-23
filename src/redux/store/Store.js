import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../state/UserSlice";


// Merging different Reducer together

export default configureStore({

    reducer:{
        user: UserSlice,
    }
})
