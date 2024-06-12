import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'white'
}

const modeSlice = createSlice({
    name: 'mode',
    initialState: initialState,
    reducers: {
        changeMode: (state, action) => {
            if (state.mode === 'white') {
                state.mode = 'dark'
            } else {
                state.mode = 'white'
            }
        }
    }
})

export const { changeMode } = modeSlice.actions

export default modeSlice.reducer