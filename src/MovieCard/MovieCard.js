import React from 'react'
import './movieCard.css'

function MovieCard(props) {
  return (
    <article className='movieCard'>
      <img src={props.img} alt={props.img}/>
      <p>Title: {props.title}</p>
      <p>Release Date: {props.releaseDate}</p>
      <p>Average Rating: {props.averageRating}</p>
    </article>
  )
}


export default MovieCard
