import { createSlice } from "@reduxjs/toolkit"

const SongSlice = createSlice({
    name: 'songSlice',
    initialState:{
        songs: [

        ]
    },
    reducers:{
        ADD_SONG: (state, action) => {
            state.songs = [...state.songs, { name: action.payload }];
        }
    }
})

export default SongSlice.reducer
export const {ADD_SONG} = SongSlice.actions