import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'cc9b631238622852f6d169b666a44c3f';

axios.defaults.baseURL = BASE_URL;

export const searchTrending = async () => {
  const res = await axios.get(`/trending/all/week?api_key=${API_KEY}`);
  return res.data;
};
export const searchMovieId = async id => {
  const res = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};

export const reviewsMovie = async id => {
  const res = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res.data;
};

export const searchMovieTitle = async title => {
  const res = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${title}`
  );
  return res.data;
};

export const castMovie = async id => {
  const res = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};
