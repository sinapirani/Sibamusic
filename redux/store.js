import { configureStore } from "@reduxjs/toolkit";
import songSlice from "./songSlice";
import playSlice from "./playSlice";
import audioSlice from "./audioSlice";

const store = configureStore({
    reducer:{
        songSlice,
        playSlice,
        audioSlice
    }
})

export default store