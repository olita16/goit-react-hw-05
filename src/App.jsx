import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './components/Layout/Layout';

const Movies = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const Home = lazy(() => import('./pages/Home/Home'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const MovieDetails = lazy(() => import('./pages/MovieDetailPage/MovieDetailPage'));
const Cast = lazy(() => import('./components/MovieCast/MovieCast'));
const Reviews = lazy(() => import('./components/MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

