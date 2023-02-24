import { configureStore } from "@reduxjs/toolkit";
import LoadingSlice from "../state/LoadingSlice";
import UserSlice from "../state/UserSlice";


// Merging different Reducer together

export default configureStore({

    reducer:{
        user: UserSlice,
        loading: LoadingSlice,
    }
})
