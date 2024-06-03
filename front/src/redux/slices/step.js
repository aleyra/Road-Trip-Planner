import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    step: [
        {
            address: 'Lyon, France',
            GPS_coordinates: [45.75, 4.85],
            step_name: 'Lyon',
            step_arrival_date: Date('2024-06-13'),
            step_days_stay: 1
        },
        {
            address: 'Paris, France',
            GPS_coordinates: [48.85, 2.35],
            step_name: 'Paris',
            step_arrival_date: Date('2024-06-14'),
            step_days_stay: 3
        },
        {
            address: 'Marseille, France',
            GPS_coordinates: [43.3, 5.4],
            step_name: 'Marseille',
            step_arrival_date: Date('2024-06-17'),
            step_days_stay: 2
        }
    ]
}

const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        addStep: (state, action) => {
            state.step.push(action.payload)
        },
        checkOverlapWithNextStep: (state, action) => {
            const { step_name } = action.payload
            const step = state.step.find(step => step.step_name === step_name)
            const index = state.step.indexOf(step)
            if (index < state.step.length - 1) {
                if (step.step_arrival_date + step.step_days_stay > state.step[index + 1].step_arrival_date) {
                    return false
                }
            }
            return true
        },
        checkOverlapWithPreviousStep: (state, action) => {
            const { step_name } = action.payload
            const step = state.step.find(step => step.step_name === step_name)
            const index = state.step.indexOf(step)
            if (index > 0) {
                if (state.step[index - 1].step_arrival_date + state.step[index - 1].step_days_stay > step.step_arrival_date) {
                    return false
                }
            }
            return true
        },
        exchangeStep: (state, action) => {
            const { step_name1, step_name2 } = action.payload
            const step1 = state.step.find(step => step.step_name === step_name1)
            const step2 = state.step.find(step => step.step_name === step_name2)
            const index1 = state.step.indexOf(step1)
            const index2 = state.step.indexOf(step2)
            state.step[index1] = step2
            state.step[index2] = step1
        },
        getStepByName: (state, action) => {
            const step = state.step.find(step => step.step_name === action.payload)
            return step
        },
        removeStep: (state, action) => {
            state.step = state.step.filter(step => step.step_name !== action.payload)
        },
        updateStep: (state, action) => {
            const { step_name, address, GPS_coordinates, step_arrival_date, step_days_stay } = action.payload
            const existingStep = state.step.find(step => step.step_name === step_name)
            if (existingStep) {
                existingStep.address = address
                existingStep.GPS_coordinates = GPS_coordinates
                existingStep.step_arrival_date = step_arrival_date
                existingStep.step_days_stay = step_days_stay
            }
        },
    }
})

export const { 
    addStep, 
    checkOverlapWithNextStep,
    checkOverlapWithPreviousStep,
    getStepByName, 
    removeStep, 
    updateStep, 
} = stepSlice.actions;

export default stepSlice.reducer