import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as ServiceApi from '../utils/ServiceApi';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    ServiceApi.fetchCast({ movieId }).then(data => setCast(data.cast));
  }, [movieId]);

  if (cast) {
    console.log(cast);
  }

  return (
    <>
      {cast && (
        <ul>
          {cast.map(item => (
            <li key={item.id}>
              <img
                src={'https://image.tmdb.org/t/p/w500' + item.profile_path}
                alt={item.title}
                className="imagegrtg"
              />
              <h2>{item.name}</h2>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
