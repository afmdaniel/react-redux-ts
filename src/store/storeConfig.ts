import { createStore, combineReducers } from '@reduxjs/toolkit'
import { alterarNumeroAction, numerosState, ALTERAR_NUM_MIN, ALTERAR_NUM_MAX } from './actions/numeros'

const initialState: numerosState = {
    min: 0,
    max: 20
}

const reducers = combineReducers({
    numeros: function(state: numerosState = initialState, action: alterarNumeroAction) {
        switch (action.type) {
            case ALTERAR_NUM_MIN:
                return {
                    ...state,
                    min: action.payload
                }
            case ALTERAR_NUM_MAX:
                return {
                    ...state,
                    max: action.payload
                }
            default:
                return state
        }
    }
})

// Cria novo estado a partir dos reducers
export const store = createStore(reducers)

export type RootState = ReturnType<typeof reducers>