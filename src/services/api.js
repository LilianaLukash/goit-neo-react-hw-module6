import axios from 'axios';

const API_KEY = 'dabb44b16d7852ec14c8b61c87734249'; // Замість YOUR_API_KEY вставте свій API Key
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer YOUR_ACCESS_TOKEN`; // Замість YOUR_ACCESS_TOKEN вставте свій API Read Access Token

export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await axios.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data;
};
