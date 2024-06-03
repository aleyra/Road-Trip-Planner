import { configureStore } from '@reduxjs/toolkit';

//slices
import stepSlice from './slices/step';

const store = configureStore({
    reducer: {
        step: stepSlice,
    }
})

export default store