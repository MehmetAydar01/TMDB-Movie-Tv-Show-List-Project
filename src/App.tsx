import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  PopularMovies,
  NowPlayingMovies,
  UpcomingMovies,
  TopRatedMovies,
  SingleMovie,
  PopularTvShows,
  AiringTodayTvShows,
  OnTvShows,
  TopRatedTvShows,
  SingleTvShow,
  Bookmarks,
} from './pages';
import { ErrorElement, Error } from './components';

import { loader as popularMoviesLoader } from './pages/PopularMovies';
import { loader as nowPlayingMoviesLoader } from './pages/NowPlayingMovies';
import { loader as upcomingMoviesLoader } from './pages/UpcomingMovies';
import { loader as topRatedMoviesLoader } from './pages/TopRatedMovies';
import { loader as popularTvShowsLoader } from './pages/PopularTvShows';
import { loader as airingTodayTvShowsLoader } from './pages/AiringTodayTvShows';
import { loader as onTvShowsLoader } from './pages/OnTvShows';
import { loader as topRatedTvShowsLoader } from './pages/TopRatedTvShows';
import { loader as singleMovieLoader } from './pages/SingleMovie';
import { loader as singleTvShowLoader } from './pages/SingleTvShow';
import { loader as landingLoader } from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'movies/popular',
        element: <PopularMovies />,
        errorElement: <ErrorElement />,
        loader: popularMoviesLoader,
      },
      {
        path: 'movies/nowplaying',
        element: <NowPlayingMovies />,
        errorElement: <ErrorElement />,
        loader: nowPlayingMoviesLoader,
      },
      {
        path: 'movies/upcoming',
        element: <UpcomingMovies />,
        errorElement: <ErrorElement />,
        loader: upcomingMoviesLoader,
      },
      {
        path: 'movies/toprated',
        element: <TopRatedMovies />,
        errorElement: <ErrorElement />,
        loader: topRatedMoviesLoader,
      },
      {
        path: 'movies/:id',
        element: <SingleMovie />,
        errorElement: <ErrorElement />,
        loader: singleMovieLoader,
      },
      {
        path: 'tvshows/popular',
        element: <PopularTvShows />,
        errorElement: <ErrorElement />,
        loader: popularTvShowsLoader,
      },
      {
        path: 'tvshows/airingtoday',
        element: <AiringTodayTvShows />,
        errorElement: <ErrorElement />,
        loader: airingTodayTvShowsLoader,
      },
      {
        path: 'tvshows/ontv',
        element: <OnTvShows />,
        errorElement: <ErrorElement />,
        loader: onTvShowsLoader,
      },
      {
        path: 'tvshows/toprated',
        element: <TopRatedTvShows />,
        errorElement: <ErrorElement />,
        loader: topRatedTvShowsLoader,
      },
      {
        path: 'tvshows/:id',
        element: <SingleTvShow />,
        errorElement: <ErrorElement />,
        loader: singleTvShowLoader,
      },
      {
        path: 'bookmarks',
        element: <Bookmarks />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
