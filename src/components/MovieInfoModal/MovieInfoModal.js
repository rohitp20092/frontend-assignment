import React from 'react'
import './movie-info-modal.css'

export const MovieInfoModal = ({movie,isModalVisible, handleModalClose}) => {
    console.log(movie);

    return (
        <>
        {isModalVisible ?
        <div onClick={handleModalClose} className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={handleModalClose}>&times;</span>
                    <h3>{movie.title}</h3>
                </div>
                <div className="modal-body">
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    </div>
                    <div>
                        <p><strong>Releas date:</strong> {movie.release_date}</p>
                        <p>{movie.overview}</p>
                        <p><strong>{movie.vote_average}</strong> / 10 ({movie.vote_count} total votes)</p>
                    </div>
                </div>
            </div>

            </div>
        :null
        }
        </>
    )
}
