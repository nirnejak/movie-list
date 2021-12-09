import React from "react"

import Header from "../components/Header"
import MovieRow from "../components/MovieRow"

const Movies = () => {
  const [movies, setMovies] = React.useState([])
  const [filteredMovies, setFilteredMovies] = React.useState([])
  const [search, setSearch] = React.useState("")

  const genres = ["Action", "Crime", "Drama", "Animation"]

  React.useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.toppersnotes.com/api/get/mock/movies",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ToppersnotesReactTest",
          },
        }
      )
      const data = await response.json()
      setMovies(data)
      setFilteredMovies(data)
    }
    fetchMovies()
  }, [])

  React.useEffect(() => {
    if (search.length && movies.length) {
      const updatedMovieList = movies.filter(movie => {
        if (
          movie.title.toLowerCase().includes(search.toLowerCase()) ||
          movie.overview.toLowerCase().includes(search.toLowerCase())
        ) {
          return true
        } else {
          return false
        }
      })
      setFilteredMovies(updatedMovieList)
    } else {
      setFilteredMovies(movies)
    }
  }, [search, movies])

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      {genres.map((genre, index) => (
        <MovieRow key={index} genre={genre} filteredMovies={filteredMovies} />
      ))}
    </div>
  )
}

export default Movies
