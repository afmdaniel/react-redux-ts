import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../store/storeConfig'

import Card from './Card'

type SorteioProps = PropsFromRedux

function randomBetween(min: number, max: number) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

const Sorteio = ({ max, min }: SorteioProps) => {
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

const mapStateToProps = (state: RootState) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Sorteio)