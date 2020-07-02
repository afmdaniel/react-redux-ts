import { configureStore } from '@reduxjs/toolkit'
import numerosReducer from './numerosSlice'

export const store = configureStore({
    reducer: {
        numeros: numerosReducer
    }
})

export type RootState = ReturnType<typeof store.getState>