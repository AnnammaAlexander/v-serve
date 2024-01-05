import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./slice/countrySlice";


const store = configureStore({
    reducer:{
        country :countrySlice,
    }
})
export default store