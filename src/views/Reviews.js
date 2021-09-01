import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as ServiceApi from '../utils/ServiceApi';

export default function Cast() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    ServiceApi.fetchReviews({ movieId }).then(setReviews);
  }, [movieId]);

  if (reviews) {
    console.log(reviews);
  }

  return <h2>hello reviews</h2>;
}
