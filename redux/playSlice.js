import { createSlice } from "@reduxjs/toolkit";


export const playSlice = createSlice({
    name: 'playSlice',
    initialState:{
        isPlaying: false
    }, 
    reducers: {
        IS_PLAYING: (state, action) => {
            state.isPlaying = action.payload
        }
    }
})

export const { IS_PLAYING } = playSlice.actions
export default playSlice.reducer