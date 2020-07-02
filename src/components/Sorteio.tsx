import React from 'react'
import { useSelector } from 'react-redux'
import { selectNumeros } from '../store/storeConfig'

import Card from './Card'

function randomBetween(min: number, max: number) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

const Sorteio = () => {
    const { max, min } = useSelector(selectNumeros)
    
    return (
        <Card title="Sorteio dos Números" color='purple'>
            <div>
                <span>
                    <strong>{randomBetween(min, max)}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Sorteio