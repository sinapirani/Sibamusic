import { createSlice } from "@reduxjs/toolkit/dist/createSlice"


export const coverSlice = createSlice({
    name: 'coverSlice',
    initialState:{
        covers: [

        ]
    },
    reducers:{

        ADD_COVER: (state, action) => {
            state.covers = [...state.covers, action.payload]
        }

    }
})