import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetail, getSelectedMovieDetails, removeSelectedMovie, getLoadingState } from '../../features/movies/movieSlice'


const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieDetails);
  const isLoading = useSelector(getLoadingState);
  console.log('IS LOADING', isLoading)

  useEffect(() => {
    dispatch(fetchMovieDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovie());
    }
  }, [dispatch, imdbID])

  return (
    <div>
      {isLoading ? (<div>...Loading</div>) 
      : (
<div>
      <h1>{data.Title}</h1>
      <div>
        <span>
          IMDB Rating {data.imdbRating}
        </span>
      </div>
      <div>
        <span>
          IMDB Votes {data.imdbVotes}
        </span>
      </div>
      <div>
        <span>
          Year {data.Year}
        </span>
      </div>
      <div>
        {data.Plot}
      </div>
      <div>
        <span>
          Actors {data.Actors}
        </span>
      </div>
      <div>
        <img src={data.Poster}></img>
      </div>
    </div>
      )}
    </div>
  )
}

export default MovieDetail;