import React from 'react'
import './movie-card.css'
export const MovieCard = () => {
    return (
        <div className="card" >
            <div className="rating" >
                5.5
            </div>
            <div style={{backgroundImage:`url(https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810)`, backgroundSize:"cover",backgroundPosition:"center center" , width:"100%", height:"86%"}} >
                
            </div>
            <div style={{textAlign:"center", wordWrap:"break-word", marginTop:"5px"}}>
                Avengers
            </div>
        </div>
    )
}
