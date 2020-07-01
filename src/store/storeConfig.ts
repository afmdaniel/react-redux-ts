import { createStore, combineReducers } from '@reduxjs/toolkit'

const reducers = combineReducers({
    numeros: function(state, action) {
        console.log(`State ${state}`)
        console.log(`Action ${action}`)
        return {
            min: 1,
            max: 10
        }
    },
    nomes: function(state, action) {
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

// Cria novo estado a partir dos reducers
function storeConfig() {
    return createStore(reducers)
}

export default storeConfig