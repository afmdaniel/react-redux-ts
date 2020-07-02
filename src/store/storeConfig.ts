import { createStore, combineReducers } from '@reduxjs/toolkit'
import { numeroReducer } from './reducers/numeros'

const reducers = combineReducers({
    numeros: numeroReducer
})

// Cria novo estado a partir dos reducers
export const store = createStore(reducers)

export type RootState = ReturnType<typeof reducers>