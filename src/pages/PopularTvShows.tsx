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

  const response = await customFetch<TvShowsResponse>('/tv/popular', {
    params,
  });

  return { ...response.data, params };
};

function PopularTvShows() {
  const { results: popularTvShows } = useLoaderData() as TvShowsResponse;

  return (
    <>
      <TvShowsList tvShows={popularTvShows} pageTitle='popular tv shows' />
      <PaginationContainer />
    </>
  );
}

export default PopularTvShows;
