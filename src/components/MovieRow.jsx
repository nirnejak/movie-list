import React from "react"

import PropTypes from "prop-types"

import MovieCard from "./MovieCard"

import "./MovieRow.scss"

const MovieRow = ({ genre, filteredMovies }) => {
  const movieOfGenre = filteredMovies.filter(movie =>
    movie.genres.includes(genre)
  )

  return (
    <div className="movie-row">
      <p className="movie-row__title">{genre}</p>
      <div className="movie-row__list">
        {movieOfGenre.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

MovieRow.propTypes = {
  genre: PropTypes.string.isRequired,
  filteredMovies: PropTypes.array.isRequired,
}

export default MovieRow
