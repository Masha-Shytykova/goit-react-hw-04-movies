const API_KEY = '1c92945d7b9e8de66cf2b53b0344c946';
const BASE_URL = 'https://api.themoviedb.org/3';

//из ДЗ В этой работе будут использоваться следующие ендпоинты.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.

// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

export function fetchTrending() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error('no results found'));
  });
}

export function fetchMovieDetails({ movieId }) {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  ).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error('no results found'));
  });
}

export function fetchCast({ movieId }) {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`).then(
    r => {
      if (r.ok) {
        return r.json();
      }
      return Promise.reject(new Error('no results found'));
    },
  );
}

export function fetchReviews({ movieId }) {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`).then(
    r => {
      if (r.ok) {
        return r.json();
      }
      return Promise.reject(new Error('no results found'));
    },
  );
}

export function fetchMovies() {
  return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}`).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error('no results found'));
  });
}
