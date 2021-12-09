import React from "react"

import { useParams } from "react-router"
import Header from "../components/Header"
import MovieInfo from "../components/MovieInfo"

const MovieDetails = () => {
  const params = useParams()
  const [movie, setMovie] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    if (params.id) {
      const fetchMovies = async () => {
        setIsLoading(true)
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
        const movies = data.filter(movie => movie.id === params.id)
        if (movies.length) setMovie(movies[0])

        setIsLoading(false)
      }
      fetchMovies()
    }
  }, [params])

  if (isLoading) {
    return <div>Loading...</div>
  } else if (movie.title) {
    return (
      <>
        <Header />
        <MovieInfo movie={movie} />
      </>
    )
  } else {
    return <div>Movie Not Found</div>
  }
}

export default MovieDetails
