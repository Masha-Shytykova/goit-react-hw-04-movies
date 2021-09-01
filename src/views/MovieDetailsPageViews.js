import { useState, useEffect } from 'react';
import { useParams, Route, NavLink } from 'react-router-dom';
import * as ServiceApi from '../utils/ServiceApi';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';

export default function MovieDetailsPageViews() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    ServiceApi.fetchMovieDetails({ movieId }).then(setMovie);
  }, [movieId]);

  if (movie) {
    console.log(movie.title);
  }

  return (
    <>
      {movie && (
        <>
          <img
            src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
            alt={movie.title}
            className="imagegrtg"
          />
          <h2>
            {movie.title} ({movie.release_date})
          </h2>
          <p>User score: {movie.vote_average}</p>
          <p>Overview: {movie.overview}</p>
          <p>
            Genres:{' '}
            {movie.genres.map(genre => {
              return `${genre.name} `;
            })}
          </p>
        </>
      )}

      <h2>Additional information</h2>

      <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
      <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>

      <Route path="/movies/:movieId/cast" exact>
        <Cast />
      </Route>

      <Route path="/movies/:movieId/reviews" exact>
        <Reviews />
      </Route>
    </>
  );
}
