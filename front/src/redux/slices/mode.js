import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'white'
}

const modeSlice = createSlice({
    name: 'mode',
    initialState: initialState,
    reducers: {
        changeMode: (state, action) => {
            state.mode = action.payload
        }
    }
})

export const { changeMode } = modeSlice.actions