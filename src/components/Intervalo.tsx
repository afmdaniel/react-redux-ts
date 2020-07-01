import './Intervalo.css'
import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../store/storeConfig'

import Card from './Card'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

type IntervaloProps = PropsFromRedux

const Intervalo = ({ min, max, alterarMinimo, alterarMaximo }: IntervaloProps) => {
    return (
        <Card title="Intevalor de Números" color='red'>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => alterarMinimo(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => alterarMaximo(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapDispatchToProps = {
    alterarMinimo: (novoNumero: number) => alterarNumeroMinimo(novoNumero),
    alterarMaximo: (novoNumero: number) => alterarNumeroMaximo(novoNumero)
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Intervalo)