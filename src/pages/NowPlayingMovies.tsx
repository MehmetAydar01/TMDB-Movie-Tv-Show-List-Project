import { MoviesList, PaginationContainer } from '@/components';
import {
  customFetch,
  type NowPlayingMoviesResponse,
  type NowPlayingMoviesResponseWithParams,
} from '@/utils';
import { type LoaderFunction, useLoaderData } from 'react-router-dom';

export const loader: LoaderFunction = async ({
  request,
}): Promise<NowPlayingMoviesResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<NowPlayingMoviesResponse>(
    '/movie/now_playing',
    { params }
  );

  return { ...response.data, params };
};

function NowPlayingMovies() {
  const { results: nowPlayingMovies } =
    useLoaderData() as NowPlayingMoviesResponse;

  return (
    <>
      <MoviesList movies={nowPlayingMovies} pageTitle='now playing movies' />
      <PaginationContainer />
    </>
  );
}

export default NowPlayingMovies;
