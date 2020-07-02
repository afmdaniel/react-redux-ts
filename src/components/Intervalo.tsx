import './Intervalo.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectNumeros } from '../store/storeConfig'

import Card from './Card'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

const Intervalo = () => {
    const { min, max } = useSelector(selectNumeros)
    const dispatch = useDispatch()

    const handleMinChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        dispatch(alterarNumeroMinimo(+e.target.value))
    }

    const handleMaxChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        dispatch(alterarNumeroMaximo(+e.target.value))
    }

    return (
        <Card title="Intevalor de Números" color='red'>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number"
                        value={min}
                        onChange={handleMinChange}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number"
                        value={max}
                        onChange={handleMaxChange}/>
                </span>
            </div>
        </Card>
    )
}

export default Intervalo
