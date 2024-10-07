import { PaginationContainer, TvShowsList } from '@/components';
import {
  customFetch,
  type TvShowsResponse,
  type TvShowsResponseWithParams,
} from '@/utils';
import { type LoaderFunction, useLoaderData } from 'react-router-dom';

export const loader: LoaderFunction = async ({
  request,
}): Promise<TvShowsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<TvShowsResponse>('/tv/top_rated', {
    params,
  });

  return { ...response.data, params };
};

function TopRatedTvShows() {
  const { results: topRatedTvShows } = useLoaderData() as TvShowsResponse;

  return (
    <>
      <TvShowsList tvShows={topRatedTvShows} pageTitle='top rated tv shows' />
      <PaginationContainer />
    </>
  );
}

export default TopRatedTvShows;
