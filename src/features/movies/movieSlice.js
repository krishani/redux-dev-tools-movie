import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_KEY = 'b7eef352'
const SERACH_KEY = 'Harry'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async() => {
  const response = await axios.get(`http://www.omdbapi.com?apiKey=${API_KEY}&s=${SERACH_KEY}&type=movie`)
  return response.data
})

export const fetchMovieDetail = createAsyncThunk('movies/fetchMovieDetail', async(id) => {
  const response = await axios.get(`http://www.omdbapi.com?apiKey=${API_KEY}&i=${id}&Plot=full`)
  return response.data
})

const initialState = {
  movies: {},
  selectedMovie: {},
  loading: false
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      console.log('REMOVE SELECTED MOVIE')
      state.selectedMovie = {}
    }
  },
  extraReducers:
    {
      [fetchMovies.pending]: (state) => {
        console.log('Fetching movies in pending state')
        return {
          ...state,
          loading: true
        }
      },
      [fetchMovies.fulfilled]: (state, { payload }) => {
        console.log('Movies fetched successfully')
        return {
          ...state,
          movies: payload,
          loading: false
        }
      },
      [fetchMovies.rejected]: () => {
        console.log('Movies fetching unsuccessful')
      },
      [fetchMovieDetail.pending]: (state) => {
        console.log('Fetching selected movie by id')
        return {
          ...state,
          loading: true
        }
      },
      [fetchMovieDetail.fulfilled]: (state, { payload }) => {
        console.log('Selected movie fetched successfully')
        return {
          ...state,
          selectedMovie: payload,
          loading: false
        }
      }
    }
})

export const { removeSelectedMovie } = movieSlice.actions

export const getAllMovies = (state) => state.movies.movies

export const getSelectedMovieDetails = (state) => state.movies.selectedMovie

export const getLoadingState = (state) => state.movies.loading

export default movieSlice.reducer