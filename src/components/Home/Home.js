import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
//import { fetchMovies } from '../../apis/MovieApi'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'
import axios from 'axios'
import { fetchMovies } from '../../features/movies/movieSlice'


const API_KEY = 'b7eef352'

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])
  return (
    <div>
      <p>Hello world in home page</p>
      <MovieListing/>
    </div>
  )
}

export default Home;