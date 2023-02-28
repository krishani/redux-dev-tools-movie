import React from 'react'
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  let renderedMovies;

  if (movies.Response === 'True') {
    renderedMovies = movies.Search. map((movie, idx) => {
      return (<MovieCard key = {idx} data={movie}/>)
    })
  } else {
    <div>
      Error occurred with movie listing
    </div>
  }

  return (
    <div>
      <h2>Movies</h2>
      <div>{renderedMovies}</div>
    </div>
  )
}

export default MovieListing;