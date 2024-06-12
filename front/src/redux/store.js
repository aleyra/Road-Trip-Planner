import { configureStore } from '@reduxjs/toolkit';

//slices
import stepSlice from './slices/step';
import modeSlice from './slices/mode';
import helpSlice from './slices/help';

import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

const preloadedState = loadFromLocalStorage();

const store = configureStore({
    reducer: {
        steps: stepSlice,
        mode: modeSlice,
        help: helpSlice,
    },
    preloadedState,
})

store.subscribe(() => {
    const state = store.getState();
    saveToLocalStorage(state);
});

export default store