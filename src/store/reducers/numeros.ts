import { alterarNumeroAction, numerosState } from '../actions/numeros'
import {ALTERAR_NUM_MAX, ALTERAR_NUM_MIN} from '../actions/actionTypes'

const initialState: numerosState = {
    min: 0,
    max: 20
}

export const numeroReducer = (state: numerosState = initialState, action: alterarNumeroAction) => {
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