import { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as ServiceApi from '../../utils/ServiceApi';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [inputQuery, setInputQuery] = useState('');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  if (location.search !== '') {
    if (query === '') {
      setQuery(new URLSearchParams(location.search).get('query'));
    }
  }

  useEffect(() => {
    if (query === '') {
      return;
    }

    ServiceApi.fetchMovies({ query }).then(data => setMovies(data.results));
    history.push({ ...location, search: `query=${query}` });
  }, [query]); /* eslint-disable-line*/

  const handleInputChange = event => {
    setInputQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputQuery.trim() === '') {
      alert('Enter your request');
      return;
    }
    setQuery(inputQuery);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="enter the title of the movie"
          value={inputQuery}
          onChange={handleInputChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            );
          })}
        {movies && movies.length === 0 && (
          <p>no results were found for {query}</p>
        )}
      </ul>
    </>
  );
}
