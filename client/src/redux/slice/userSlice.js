import { createSlice } from "@reduxjs/toolkit";

const getToken = () =>{
    const token = localStorage.getItem('token')
    if(token){
        return token;
    }
}

const initialState = {
    token :getToken(),
    id:'GuestUser',
}
//create slice
const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        setToken:(state,action) =>{
            state.token = action.payload
            localStorage.setItem('token',action.payload)
        },
        setId:(state,action)=>{
            state.id=action.payload,
            localStorage.setItem('id',action.payload)
        },
        setLogOut:(state)=>{
            state.token='',
            state.id='',
            localStorage.removeItem('token'),
            localStorage.removeItem('id')

        }
    
    }
})
export default userSlice.reducer
export const {setToken,setId,setLogOut} = userSlice.actions