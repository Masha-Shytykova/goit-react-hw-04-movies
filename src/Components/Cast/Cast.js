import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as ServiceApi from '../utils/ServiceApi';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    ServiceApi.fetchCast({ movieId }).then(setCast);
  }, [movieId]);

  if (cast) {
    console.log(cast);
  }

  return <h2>hello</h2>;
}
