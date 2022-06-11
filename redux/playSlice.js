import { createSlice } from "@reduxjs/toolkit";


export const playSlice = createSlice({
  name: "playSlice",
  initialState: {
    isPlaying: true,
    src: false,
    context: false,
    analyser: false,
  },
  reducers: {
    IS_PLAYING: (state, action) => {
      state.isPlaying = action.payload;
    },
    IS_SRC: (state, action) => {
      state.src = action.payload;
    },
    setContext: (state, action) => {
      state.context = action.payload;
    },
    setAnalyser: (state, action) => {
        state.analyser = action.payload
    }
  },
});

export const { IS_PLAYING, IS_SRC, setContext, setAnalyser } = playSlice.actions;
export default playSlice.reducer