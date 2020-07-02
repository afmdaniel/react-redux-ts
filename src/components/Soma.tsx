import React from 'react'
import { useSelector } from 'react-redux'
import { selectNumeros } from '../store/numerosSlice'

import Card from './Card'

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