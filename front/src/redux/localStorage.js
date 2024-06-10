export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        console.log('State loaded from localStorage:', serializedState);
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load state", e);
        return undefined;
    }
};

export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
        console.log('State saved to localStorage:', serializedState);
    } catch (e) {
        console.warn("Could not save state", e);
    }
};