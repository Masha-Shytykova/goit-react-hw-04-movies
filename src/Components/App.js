import { NavLink, Route, Switch } from 'react-router-dom';
import HomePageViews from '../views/HomePageViews';
import MoviesPageViews from '../views/MoviesPageViews';
import MovieDetailsPageViews from '../views/MovieDetailsPageViews';
import NotFoundViews from '../views/NotFoundViews';

const App = () => {
  return (
    <>
      <nav>
        <NavLink exact to="/" className="link" activeClassName="activeLink">
          Home
        </NavLink>
        <NavLink to="/movies" className="link" activeClassName="activeLink">
          Movies
        </NavLink>
      </nav>

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
    </>
  );
};

export default App;
