export const ALTERAR_NUM_MIN = 'ALTERAR_NUM_MIN'
export const ALTERAR_NUM_MAX = 'ALTERAR_NUM_MAX'

//TYPE CHECK ACTION CREATORS
export interface alterarNumeroAction {
    type: string,
    payload: number
}

//TYPE CHECK STATE
export interface numerosState {
    min: number,
    max: number
}

// ACTION CREATORS
export function alterarNumeroMinimo(novoNumero: number): alterarNumeroAction {
    return {
        type: ALTERAR_NUM_MIN,
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero: number): alterarNumeroAction {
    return {
        type: ALTERAR_NUM_MAX,
        payload: novoNumero
    }
}