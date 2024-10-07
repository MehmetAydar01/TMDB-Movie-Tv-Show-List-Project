import { MoviesList, PaginationContainer } from '@/components';
import {
  customFetch,
  type TopRatedMoviesResponse,
  type TopRatedMoviesResponseWithParams,
} from '@/utils';
import { type LoaderFunction, useLoaderData } from 'react-router-dom';

export const loader: LoaderFunction = async ({
  request,
}): Promise<TopRatedMoviesResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<TopRatedMoviesResponse>(
    '/movie/top_rated',
    { params }
  );

  return { ...response.data, params };
};

function TopRatedMovies() {
  const { results: topRatedMovies } = useLoaderData() as TopRatedMoviesResponse;

  return (
    <>
      <MoviesList movies={topRatedMovies} pageTitle='top rated movies' />
      <PaginationContainer />
    </>
  );
}

export default TopRatedMovies;
