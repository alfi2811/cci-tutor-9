import React from 'react'
import '../assets/css/card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="img">
                <img src="https://placeimg.com/600/300/people" alt="" />
            </div>
            <div className="info-text">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
            
        </div>
    )
}

export default Card
