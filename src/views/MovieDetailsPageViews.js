import {
  useParams,
  useLocation,
  useRouteMatch,
  Route,
  NavLink,
} from 'react-router-dom';
import MovieDetailsPage from '../Components/MovieDetailsPage/MovieDetailsPage';
import CastViews from './CastViews';
import ReviewsViews from './ReviewsViews';

const MovieDetailsPageViews = () => {
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const { movieId } = useParams();

  return (
    <>
      <MovieDetailsPage />
      <h2>Additional information</h2>

      <NavLink
        to={{
          pathname: `${url}/cast`,
          state: { from: location.state?.from || '/' },
        }}
      >
        Cast
      </NavLink>
      <NavLink
        to={{
          pathname: `${url}/reviews`,
          state: { from: location.state?.from || '/' },
        }}
      >
        Reviews
      </NavLink>

      <Route path={`${path}/cast`} exact>
        <CastViews />
      </Route>

      <Route path={`${path}/reviews`} exact>
        <ReviewsViews />
      </Route>
    </>
  );
};

export default MovieDetailsPageViews;
