import React from 'react'
import { useSelector } from 'react-redux'
import { selectNumeros } from '../store/storeConfig'

import Card from './Card'

const Media = () => {
    const { max, min } = useSelector(selectNumeros)
    
    return (
        <Card title="Média dos Números" color='green'>
            <div>
                <span>
                    <strong>{(max + min)/2}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Media
