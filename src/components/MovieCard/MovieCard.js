import React from 'react'
import './movie-card.css'

export const MovieCard = ({movie, onClickMovie}) => {

    return (
        <div className="card" key={movie.id} onClick={() => onClickMovie(movie)}>
            <div className="rating" >
                {movie.vote_average}
            </div>
            <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, backgroundSize:"100% 100%",backgroundPosition:"center center" , width:"100%", height:"86%"}} >
                
            </div>
            <div style={{textAlign:"center", wordWrap:"break-word", marginTop:"5px"}}>
                {movie.title}
            </div>
        </div>
    )
}
