import { configureStore } from '@reduxjs/toolkit';

//slices
import stepSlice from './slices/step';
import modeSlice from './slices/mode';

import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

const preloadedState = loadFromLocalStorage();

const store = configureStore({
    reducer: {
        steps: stepSlice,
        mode: modeSlice
    },
    preloadedState,
})

store.subscribe(() => {
    const state = store.getState();
    saveToLocalStorage(state);
});

export default store