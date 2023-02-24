import { createSlice } from "@reduxjs/toolkit";
    
export const UserSlice=createSlice({

    name:"user",
    initialState:{
        value:{}
    },
    reducers:{
        userInfo:(state)=>{
            
            const realName = localStorage.getItem("name")
            const email = localStorage.getItem("email")
            const phone = localStorage.getItem("phone")
            const photo = localStorage.getItem("photo")
            const userName = localStorage.getItem("userName")
            const accessToken = localStorage.getItem("accessToken")
          
          const user={
            realName,
            email,
            phone,
            photo,
            userName,
            accessToken
          }
        //   console.log(user);
            state.value=user;
        }
    }

})

export const {userInfo} =UserSlice.actions;
export default UserSlice.reducer;