import { createSlice } from "@reduxjs/toolkit";


const audioSlice = createSlice({
    name: 'audioSlice',
    initialState:{
        audio: null
    },
    reducers:{
        ADD_AUDIO: (state, action) => {
            state.audio = action.payload
        }
    }
})

export default audioSlice.reducer;
export const {ADD_AUDIO} = audioSlice.actions