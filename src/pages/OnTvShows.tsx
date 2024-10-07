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

  const response = await customFetch<TvShowsResponse>('/tv/on_the_air', {
    params,
  });

  return { ...response.data, params };
};

function OnTvShows() {
  const { results: onTvShows } = useLoaderData() as TvShowsResponse;

  return (
    <>
      <TvShowsList tvShows={onTvShows} pageTitle='currently airing tv shows' />
      <PaginationContainer />
    </>
  );
}

export default OnTvShows;
