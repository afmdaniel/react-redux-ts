import './Intervalo.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { alterarMaximo, alterarMinimo, selectNumeros } from '../store/numerosSlice'


import Card from './Card'

const Intervalo = () => {
    const { min, max } = useSelector(selectNumeros)
    const dispatch = useDispatch()

    const handleMinChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        dispatch(alterarMinimo(+e.target.value))
    }

    const handleMaxChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        dispatch(alterarMaximo(+e.target.value))
    }

    return (
        <Card title="Intevalor de Números" color='red'>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number"
                        min={0}
                        max={max}
                        value={min}
                        onChange={handleMinChange}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number"
                        min={min}
                        value={max}
                        onChange={handleMaxChange}/>
                </span>
            </div>
        </Card>
    )
}

export default Intervalo
