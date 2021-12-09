import React from "react"

import PropTypes from "prop-types"

import "./MovieInfo.scss"

const MovieInfo = ({ movie }) => {
  const rating = Math.floor(movie.imdb_rating / 2)

  const renderRating = () => {
    const ratingUI = []
    for (let i = 0; i < rating; i++) {
      ratingUI.push(<i className="fas fa-star" />)
    }
    if (rating < 5) {
      for (let i = 0; i < 5 - rating; i++) {
        ratingUI.push(<i className="far fa-star" />)
      }
    }
    return ratingUI
  }

  return (
    <div className="movie-info">
      <div className="movie-info__image">
        <img src={movie.backdrop} alt={movie.title} />
      </div>
      <div className="movie-info__content">
        <div className="movie-info__content__header">
          <h1>
            {movie.title}({movie.imdb_rating})
          </h1>
          <div className="movie-info__content__header__rating">
            {renderRating()}
          </div>
        </div>
        <p>
          <span>{movie.released_on}</span> | <span>{movie.length}</span> |{" "}
          <span>{movie.director}</span>
        </p>
        <p>
          <strong>Cast:</strong>
          {movie.cast.map((cast, index) => (
            <span key={index}>{cast}, </span>
          ))}
        </p>
        <p>
          <strong>Movie Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  )
}

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default MovieInfo
