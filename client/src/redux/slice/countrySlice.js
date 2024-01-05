import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    citizenship :{label:"United Arab Emirates", value:"AE"}
}

const countrySlice = createSlice({
    name :"country" ,
    initialState:initialState,
    reducers:{
        setCountry:(state,action) =>{
            state.citizenship = action.payload
            localStorage.setItem('citizenship',action.payload)
        }
    }
})
export default countrySlice.reducer
export const {setCountry} =countrySlice.actions