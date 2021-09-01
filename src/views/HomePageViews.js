import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as ServiceApi from '../utils/ServiceApi';

export default function HomePageViews() {
  const { url } = useRouteMatch();
  const [trends, setTrends] = useState(null);

  console.log(url);
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
              <Link to={`movies/${trend.id}`}>{trend.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
