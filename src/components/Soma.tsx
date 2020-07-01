import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../store/storeConfig'

import Card from './Card'

type SomaProps = PropsFromRedux

const Soma = ({ min, max }: SomaProps) => {
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

const mapStateToProps = (state: RootState) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Soma)