import { lazy, Suspense } from 'react';
import { useLocation, useRouteMatch, Route, NavLink } from 'react-router-dom';
import MovieDetailsPage from '../Components/MovieDetailsPage/MovieDetailsPage';

//import CastViews from './CastViews';
//import ReviewsViews from './ReviewsViews';

const CastViews = lazy(() =>
  import('./CastViews' /* webpackChunkName: "cast-page" */),
);

const ReviewsViews = lazy(() =>
  import('./ReviewsViews' /* webpackChunkName: "reviews-page" */),
);
const MovieDetailsPageViews = () => {
  const { url, path } = useRouteMatch();
  const location = useLocation();

  return (
    <>
      <MovieDetailsPage />
      <div className="container">
        <h2>Additional information</h2>

        <NavLink
          to={{
            pathname: `${url}/cast`,
            state: { from: location.state?.from || '/' },
          }}
          className="link"
          activeClassName="activeLink"
        >
          Cast
        </NavLink>
        <NavLink
          to={{
            pathname: `${url}/reviews`,
            state: { from: location.state?.from || '/' },
          }}
          className="link"
          activeClassName="activeLink"
        >
          Reviews
        </NavLink>
      </div>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Route path={`${path}/cast`} exact>
          <div className="container">
            <CastViews />
          </div>
        </Route>

        <Route path={`${path}/reviews`} exact>
          <div className="container">
            <ReviewsViews />
          </div>
        </Route>
      </Suspense>
    </>
  );
};

export default MovieDetailsPageViews;
