import { configureStore } from "@reduxjs/toolkit";
import songSlice from "./songSlice";

const store = configureStore({
    reducer:{
        songSlice,
    }
})

export default store