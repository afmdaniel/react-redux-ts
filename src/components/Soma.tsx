import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/storeConfig'

import Card from './Card'

const selectNumeros = (state: RootState) => state.numeros

const Soma = () => {
    const { max, min } = useSelector(selectNumeros)

    return (
        <Card title="Soma dos Números" color='blue'>
            <div>
                <span>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Soma