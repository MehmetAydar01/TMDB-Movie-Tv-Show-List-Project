import { MoviesList, PaginationContainer } from '@/components';
import {
  customFetch,
  type PopularMoviesResponse,
  type PopularMoviesResponseWithParams,
} from '@/utils';
import { type LoaderFunction, useLoaderData } from 'react-router-dom';

export const loader: LoaderFunction = async ({
  request,
}): Promise<PopularMoviesResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<PopularMoviesResponse>('/movie/popular', {
    params,
  });

  return { ...response.data, params };
};

function PopularMovies() {
  const { results: popularMovies } = useLoaderData() as PopularMoviesResponse;

  return (
    <>
      <MoviesList movies={popularMovies} pageTitle='popular movies' />
      <PaginationContainer />
    </>
  );
}

export default PopularMovies;
