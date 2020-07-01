import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../store/storeConfig'

// TODO: refazer utilizados os hooks useSelector e useDispatch
// TODO: refazer utilizando context API

import Card from './Card'

type MediaProps = PropsFromRedux

const Media = ({ min, max }: MediaProps) => {
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

const mapStateToProps = (state: RootState) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Media)
