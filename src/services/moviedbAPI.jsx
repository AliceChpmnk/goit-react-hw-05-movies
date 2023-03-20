import axios from 'axios';

const API_KEY = `8dee51c91a52c88890f609d5b0af0b1a`;

export const trendingMovies = async () => {
    const config = {
        url: 'https://api.themoviedb.org/3/trending/movie/day',
        params: {
            api_key: API_KEY,
        }
}
    const response = await axios(config);
    return response.data;
};

export const moviesByQuery = async (name, page = 1) => {
    const config = {
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: page,
            query: name
        }
    }
    const response = await axios(config);
    return response.data;
};

export const movieById = async (movie_id) => {
    const config = {
        url: `https://api.themoviedb.org/3/movie/${movie_id}`,
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    }
    const response = await axios(config);
    return response.data;
};

export const movieCredits = async (movie_id) => {
    const config = {
        url: `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    }
    const response = await axios(config);
    return response.data;
};

export const movieReviews = async (movie_id) => {
    const config = {
        url: `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1,
        }
    }
    const response = await axios(config);
    return response.data; 
};