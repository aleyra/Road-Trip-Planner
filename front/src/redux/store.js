import { configureStore } from '@reduxjs/toolkit';

//slices
import stepSlice from './slices/step';

const store = configureStore({
    reducer: {
        steps: stepSlice,
    }
})

export default store