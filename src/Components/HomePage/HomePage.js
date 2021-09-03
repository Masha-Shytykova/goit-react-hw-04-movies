import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as ServiceApi from '../../utils/ServiceApi';

export default function HomePage() {
  const location = useLocation();
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    ServiceApi.fetchTrending().then(data => setTrends(data.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trends && (
        <ul>
          {trends.map(trend => (
            <li key={trend.id}>
              <Link
                to={{
                  pathname: `/movies/${trend.id}`,
                  state: { from: location },
                }}
              >
                {trend.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
