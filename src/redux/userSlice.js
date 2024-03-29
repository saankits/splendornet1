import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[],
}

export const userSlice = createSlice({
    name:"userdata",
    initialState,
    reducers:{
        addUser : (state,action)=>{
            state.users = action.payload
            // console.log(initialState.users)
        }
    }

})
export const {addUser} = userSlice.actions
export default userSlice.reducer