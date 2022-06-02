import { configureStore } from "@reduxjs/toolkit";
import songSlice from "./songSlice";
import playSlice from "./playSlice";

const store = configureStore({
    reducer:{
        songSlice,
        playSlice
    }
})

export default store