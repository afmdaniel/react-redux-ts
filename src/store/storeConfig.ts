import { createStore, combineReducers } from '@reduxjs/toolkit'
import { numeroReducer } from './reducers/numeros'

const reducers = combineReducers({
    numeros: numeroReducer
})

export const store = createStore(reducers)

export type RootState = ReturnType<typeof reducers>

export const selectNumeros = (state: RootState) => state.numeros