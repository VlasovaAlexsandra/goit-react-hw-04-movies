import React, { Suspense, lazy } from 'react';
import './styles.css';
import { Route, Switch } from 'react-router-dom';
// import NotFoundView from './views/NotFoundView';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';
import Spinner from './components/Loader';

const HomePage = lazy(() =>
  import(
    './views/MoviesPage.js' /* webpackChunkName: "home-view" */
  ),
);
const Movies = lazy(() =>
  import(
    './views/HomePage.js' /* webpackChunkName: "movies-page" */
  ),
);
const MovieId = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "movies-details-page" */
  ),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route
          exact
          path={routes.home}
          component={Movies}
        />
        <Route
          exact
          path={routes.movies}
          component={HomePage}
        />
        <Route
          path={routes.movieDetails}
          component={MovieId}
        />
        <Route component={Movies} />
      </Switch>
    </Suspense>
  </>
);

export default App;
