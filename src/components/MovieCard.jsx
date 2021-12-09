import React from "react"

import PropTypes from "prop-types"

import { Link } from "react-router-dom"

import "./MovieCard.scss"

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="movie-card">
      <img src={movie.backdrop} alt={movie.title} />
      <p>{movie.title}</p>
    </Link>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default MovieCard
