import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// CREATE ACTIONS AND REDUCERS
const numerosSlice = createSlice({
    name: 'numeros',

    initialState: {
        min: 0,
        max: 10
    },

    reducers: {
        alterarMinimo: (state, action: PayloadAction<number>) => {
            state.min = action.payload
        },

        alterarMaximo: (state, action: PayloadAction<number>) => {
            state.max = action.payload
        },

    }
})

// EXPORT ACTION CREATOR
export const { alterarMaximo, alterarMinimo } = numerosSlice.actions
export type alterarNumerosAction = typeof alterarMaximo | typeof alterarMinimo

// EXPORT SELECTOR
export const selectNumeros = (state: RootState) => state.numeros

// EXPORT REDUCERS
export default numerosSlice.reducer