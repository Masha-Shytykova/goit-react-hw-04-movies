import { lazy, Suspense } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Loader from './Loader/Loader';

//import HomePageViews from '../views/HomePageViews';
//import MoviesPageViews from '../views/MoviesPageViews';
//import MovieDetailsPageViews from '../views/MovieDetailsPageViews';
//import NotFoundViews from '../views/NotFoundViews';

const HomePageViews = lazy(() =>
  import('../views/HomePageViews' /* webpackChunkName: "home-page" */),
);
const MoviesPageViews = lazy(() =>
  import('../views/MoviesPageViews' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPageViews = lazy(() =>
  import(
    '../views/MovieDetailsPageViews' /* webpackChunkName: "movie-details-page" */
  ),
);
const NotFoundViews = lazy(() =>
  import('../views/NotFoundViews' /* webpackChunkName: "not-found-page" */),
);

const App = () => {
  return (
    <>
      <div className="container">
        <nav>
          <NavLink exact to="/" className="link" activeClassName="activeLink">
            Home
          </NavLink>
          <NavLink to="/movies" className="link" activeClassName="activeLink">
            Movies
          </NavLink>
        </nav>
      </div>

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePageViews />
          </Route>

          <Route path="/movies" exact>
            <MoviesPageViews />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPageViews />
          </Route>

          <Route path="/error" exact>
            <NotFoundViews />
          </Route>

          <Route>
            <NotFoundViews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
