import axios from 'axios'

const API_KEY = 'b7eef352'
export const fetchMovies = async (searchKey) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com?apiKey=${API_KEY}&s=${searchKey}&type=movie`)
    console.log('RESPONSE FROM API IS', response)
    return response;

  } catch (e) {
    console.log(e)
    return []
  }
}