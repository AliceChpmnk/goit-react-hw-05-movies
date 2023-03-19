const API_KEY = `8dee51c91a52c88890f609d5b0af0b1a`;

export const trendingMovies = () => {
    return {
        url: 'https://api.themoviedb.org/3/trending/movie/day',
        params: {
            api_key: API_KEY,
        }
}};

export const moviesByQuery = (name, page=1) => {
    return {
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: page,
            query: name
        }
    }
};

export const movieById = (movie_id) => {
    return {
        url: `https://api.themoviedb.org/3/movie/${movie_id}`,
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    }
};

export const movieCredits = (movie_id) => {
    return {
        url: `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    }
};

export const movieReviews = (movie_id) => {
    return {
        url: `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1,
        }
    }
};