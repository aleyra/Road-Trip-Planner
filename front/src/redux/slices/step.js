import { createSlice } from '@reduxjs/toolkit';

let step_created = 0

const initialState = {
    step: [
        // {
        //     address: 'Lyon, France',
        //     GPS_coordinates: [45.75, 4.85],
        //     step_name: 'Lyon',
        //     step_arrival_date: '2024-06-12',
        //     step_days_stay: 1,
        //     to_modify: false,
        //     id: 0
        // },
        // {
        //     address: 'Paris, France',
        //     GPS_coordinates: [48.85, 2.35],
        //     step_name: 'Paris',
        //     step_arrival_date: '2024-06-13',
        //     step_days_stay: 3,
        //     to_modify: false,
        //     id: 1
        // },
        // {
        //     address: 'Marseille, France',
        //     GPS_coordinates: [43.3, 5.4],
        //     step_name: 'Marseille',
        //     step_arrival_date: '2024-06-14',
        //     step_days_stay: 2,
        //     to_modify: false,
        //     id: 2
        // },
        // {
        //     address: 'Nice, France',
        //     GPS_coordinates: [43.7, 7.25],
        //     step_name: 'Nice',
        //     step_arrival_date: '2024-06-16',
        //     step_days_stay: 1,
        //     to_modify: false,
        //     id: 3
        // }
    ]
}

const stepSlice = createSlice({
    name: 'step',
    initialState: initialState,
    reducers: {
        addStep: (state, action) => {
            let new_step = action.payload
            new_step.id = step_created
            step_created += 1
            state.step.push(new_step)
        },
        removeStep: (state, action) => {
            state.step = state.step.filter(step => step.id !== action.payload)
        },
        updateStep: (state, action) => {
            const { id, step_name, address, GPS_coordinates, step_arrival_date, step_days_stay } = action.payload
            const existingStep = state.step.find(step => step.id === id)
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
            const existingStep = state.step.find(step => step.id === action.payload)
            if (existingStep) {
                existingStep.to_modify = true
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