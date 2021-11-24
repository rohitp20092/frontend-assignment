import React from 'react'
import Header from '../components/Header/Header'
import { MovieCard } from '../components/MovieCard/MovieCard'
import './landing.css'

export const Landing = () => {
    return (
        <div className="landing-container" >
            <Header/>
            <div>
                <h3>
                    Most Recent Movies    
                </h3>
                <div style={{display:"flex", flexWrap:"wrap"}} >
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                       <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                </div>
            </div>
        </div>
    )
}
