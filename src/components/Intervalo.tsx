import './Intervalo.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { alterarMaximo, alterarMinimo, alterarNumerosAction, selectNumeros } from '../store/numerosSlice'


import Card from './Card'

const Intervalo = () => {
    const { min, max } = useSelector(selectNumeros)
    const dispatch = useDispatch()

    const handleChange = (actionCreator: alterarNumerosAction) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(actionCreator(+e.target.value))
        }
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
                        onChange={handleChange(alterarMinimo)}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number"
                        min={min}
                        value={max}
                        onChange={handleChange(alterarMaximo)}/>
                </span>
            </div>
        </Card>
    )
}

export default Intervalo
