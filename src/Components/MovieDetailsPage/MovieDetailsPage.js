import { useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';
import * as ServiceApi from '../../utils/ServiceApi';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    ServiceApi.fetchMovieDetails({ movieId }).then(setMovie).catch(setError);
  }, [movieId]);

  const handleGoBackClick = e => {
    history.push(location.state.from);
  };

  return (
    <>
      {error && <Redirect to="/error" />}
      {movie && (
        <>
          <button type="button" onClick={handleGoBackClick}>
            Go Back
          </button>
          <img
            src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
            alt={movie.title}
            className="imagegrtg"
          />
          <h2>
            {movie.title} ({movie.release_date.substr(0, 4)})
          </h2>
          <p>User score: {movie.vote_average}</p>
          <p>Overview: {movie.overview}</p>
          <p>
            Genres:
            {movie.genres.slice(0, 2).map(genre => {
              return `${genre.name} `;
            })}
          </p>
        </>
      )}
    </>
  );
}
