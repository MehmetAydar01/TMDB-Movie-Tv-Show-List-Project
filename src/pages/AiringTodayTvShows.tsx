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

  const response = await customFetch<TvShowsResponse>('/tv/airing_today', {
    params,
  });

  return { ...response.data, params };
};

function AiringTodayTvShows() {
  const { results: airingTodayTvShows } = useLoaderData() as TvShowsResponse;

  return (
    <>
      <TvShowsList
        tvShows={airingTodayTvShows}
        pageTitle='tv shows airing today'
      />
      <PaginationContainer />
    </>
  );
}

export default AiringTodayTvShows;
