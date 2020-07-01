import './Card.css'
import React from 'react'

type CardProps = {
    title: string,
    color: string,
    children?: React.ReactNode
}

const Card = ({ title, color, children }: CardProps) => {
    return (
        <div className={`Card ${color}`}>
          <div className="Header">
            <span className="Title">{ title }</span>
          </div>
          <div className="Content">
            { children }
          </div>
        </div>
    )
}

export default Card