import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div>
      <Link to={`movies/${data.imdbID}`}>
      <h3>Movie Card</h3>
      <img src={data.Poster} alt={data.Title} />
      <div>
        <h4>{data.Title}</h4>
        <p>{data.Year}</p>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard