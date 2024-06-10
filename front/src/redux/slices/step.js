import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    step: [
        {
            address: 'Lyon, France',
            GPS_coordinates: [45.75, 4.85],
            step_name: 'Lyon',
            step_arrival_date: '2024-06-12',
            step_days_stay: 1,
            to_modify: false,
        },
        {
            address: 'Paris, France',
            GPS_coordinates: [48.85, 2.35],
            step_name: 'Paris',
            step_arrival_date: '2024-06-13',
            step_days_stay: 3,
            to_modify: false,
        },
        {
            address: 'Marseille, France',
            GPS_coordinates: [43.3, 5.4],
            step_name: 'Marseille',
            step_arrival_date: '2024-06-14',
            step_days_stay: 2,
            to_modify: false,
        },
        {
            address: 'Nice, France',
            GPS_coordinates: [43.7, 7.25],
            step_name: 'Nice',
            step_arrival_date: '2024-06-16',
            step_days_stay: 1,
            to_modify: false,
        }
    ]
}

const stepSlice = createSlice({
    name: 'step',
    initialState: initialState,
    reducers: {
        addStep: (state, action) => {
            state.step.push(action.payload)
        },
        removeStep: (state, action) => {
            state.step = state.step.filter(step => step.step_name !== action.payload)
        },
        updateStep: (state, action) => {
            const { step_name, address, GPS_coordinates, step_arrival_date, step_days_stay } = action.payload
            const existingStep = state.step.find(step => step.step_name === step_name)
            if (existingStep) {
                existingStep.step_name = step_name
                existingStep.address = address
                existingStep.GPS_coordinates = GPS_coordinates
                existingStep.step_arrival_date = step_arrival_date
                existingStep.step_days_stay = step_days_stay
                existingStep.to_modify = false
            }
        },
        order: (state, action) => {
            state.step = state.step.sort((a, b) => a.step_arrival_date.localeCompare(b.step_arrival_date))
        },
        setModifyTrue: (state, action) => {
            const existingStep = state.step.find(step => step.step_name === action.payload)
            if (existingStep) {
                existingStep.to_modify = true
                // console.log('to_modify:', current(existingStep.to_modify))
            }
        }
    }
})

export const { 
    addStep, 
    removeStep, 
    updateStep,
    order,
    setModifyTrue,
} = stepSlice.actions;

export default stepSlice.reducer