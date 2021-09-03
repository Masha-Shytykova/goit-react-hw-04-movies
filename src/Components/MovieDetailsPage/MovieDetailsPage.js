import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory, Redirect } from 'react-router-dom';
import * as ServiceApi from '../../utils/ServiceApi';
import s from '../MovieDetailsPage/MovieDetailsPage.module.css';

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
        <div className="container">
          <button type="button" onClick={handleGoBackClick}>
            Go Back
          </button>
          <div className={s.card_container}>
            <img
              className={s.image_wrapper}
              src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
              alt={movie.title}
            />

            <div className={s.card_description}>
              <h2>
                {movie.title} ({movie.release_date.substr(0, 4)})
              </h2>

              <span className={s.description}>
                {' '}
                User score: {movie.vote_average}
              </span>

              <h3>
                Overview:
                <span className={s.description}>{movie.overview} </span>
              </h3>
              <h3>
                Genres:
                <span className={s.description}>
                  {movie.genres.slice(0, 3).map(genre => {
                    return `${genre.name} `;
                  })}
                </span>
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
