import React from 'react'
import './allMovies.css'
import MovieCard from '../MovieCard/MovieCard'

//

function AllMovies(props) {
  const allMovieCards = props.movies.map(movie => {
    return <MovieCard img={movie.poster_path} title={movie.title}/>
  })
  return (
    <section className="all-movies-component card-container">
      {allMovieCards}
    </section>
  )
}

export default AllMovies
