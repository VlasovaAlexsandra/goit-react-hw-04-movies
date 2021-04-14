import React, { Suspense, lazy } from 'react';
// import Searchbar from './components/Searchbar/Searchbar'
// import ImageGallery from './components/Searchbar/ImageGallery'
// import Button from './components/Searchbar/Button'
// import Modal from './components/Searchbar/Modal'
// import Spinner from './components/Searchbar/Loader'
// import hitsApi from './services/hits-api'
import './styles.css'
import { Route, Switch } from 'react-router-dom';
// import HomeView from './views/HomeView'
// import Movies from './views/MoviesPage'
// import MovieId from './views/MovieDetailsPage'
import NotFoundView from './views/NotFoundView'
import routes from './routes'
import AppBar from './components/AppBar/AppBar'
import Spinner from './components/Searchbar/Loader'

const HomeView = lazy(() => import('./views/HomeView.js' /* webpackChunkName: "home-view" */))
const Movies = lazy(() => import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */))
const MovieId = lazy(() => import('./views/MovieDetailsPage.js' /* webpackChunkName: "movies-details-page" */))
// const NotFoundView = lazy(() => import('./views/NotFoundView.js'))

const App = () => (
  <>

    <AppBar />
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route exact path={routes.movies} component={Movies} />
        <Route path={routes.movieDetails} component={MovieId} />
        <Route component={NotFoundView} />

      </Switch>
    </Suspense>

  </>
)

export default App;
