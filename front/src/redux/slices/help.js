import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    help: false
}

const helpSlice = createSlice({
    name: 'help',
    initialState: initialState,
    reducers: {
        toggleHelp: (state, action) => {
            state.help = !state.help
        }
    }
})

export const { toggleHelp } = helpSlice.actions

export default helpSlice.reducer