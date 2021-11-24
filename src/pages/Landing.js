import React from 'react'
import Header from '../components/Header/Header'
import { MovieCard } from '../components/MovieCard/MovieCard'
import './landing.css'
import { useState, useEffect } from 'react';
import axios from "axios";
import { MovieInfoModal } from '../components/MovieInfoModal/MovieInfoModal';

export const Landing = () => {

    const [movies, setMovies] = useState([]);
    const [movieDetail, setMovieDetail] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(async() => {
        getMoviesData();
        // const { data: movies } = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`);
        // setMovies(movies.results);
      }, []);

    const handleSearch = async (name) => {
        if(name.length > 2) {
            const { data: movies } = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${name}`);
            setMovies(movies.results);
        } 
        if(name.length === 0) {
            getMoviesData();
        }
    }

    const handleModalClose = () => {
        setIsModalVisible(false)
    }

    const handleMovieInfo = (movie) => {
        setMovieDetail(movie);
        setIsModalVisible(true);
    }

    async function getMoviesData() {
        const { data: movies } = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`);
        setMovies(movies.results);
    }

    return (
        <div className="landing-container" >
            <Header onSearchMovie={handleSearch}/>
            <div>
                <h1>
                    Most Recent Movies
                </h1>
                <div style={{display:"flex", flexWrap:"wrap", justifyContent: "space-between"}} >
                    {/* {movies.length} */}
                    {movies.map(movie => <MovieCard key={movie.id} movie={movie} onClickMovie={handleMovieInfo} />)}
                </div>
            </div>
            <MovieInfoModal movie={movieDetail} isModalVisible={isModalVisible} handleModalClose={handleModalClose}/>
        </div>
    )
}
