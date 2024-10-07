import { MoviesList, PaginationContainer } from '@/components';
import {
  customFetch,
  type UpcomingMoviesResponse,
  type UpcomingMoviesResponseWithParams,
} from '@/utils';
import { type LoaderFunction, useLoaderData } from 'react-router-dom';

export const loader: LoaderFunction = async ({
  request,
}): Promise<UpcomingMoviesResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<UpcomingMoviesResponse>(
    '/movie/upcoming',
    { params }
  );

  return { ...response.data, params };
};

function UpcomingMovies() {
  const { results: upcomingMovies } = useLoaderData() as UpcomingMoviesResponse;

  return (
    <>
      <MoviesList movies={upcomingMovies} pageTitle='upcoming movies' />
      <PaginationContainer />
    </>
  );
}

export default UpcomingMovies;
