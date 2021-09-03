import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as ServiceApi from '../../utils/ServiceApi';
import s from '../Cast/Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    ServiceApi.fetchCast({ movieId })
      .then(data => setCast(data.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul className={s.cast_list}>
          {cast.slice(0, 5).map(item => (
            <li key={item.id} className={s.item}>
              <div className={s.cardcontainer}>
                <img
                  src={'https://image.tmdb.org/t/p/w200' + item.profile_path}
                  alt={item.title}
                  className="imagegrtg"
                />
                <h3>{item.name}</h3>
                <p>Character: {item.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
