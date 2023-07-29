import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({

    name:"user",
    initialState:{
        name:"user",
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
    loginStart:(state)=>{

    },
    loginSucces:(state,action)=>{},
    loginFailure:(state)=>{}
    }
})

export const {addProducts} =userSlice.actions;
export default userSlice.reducer;