import {
  TrendingMovieLists,
  TrendingTvShowLists,
  SwiperSliderEffect,
} from '@/components';
import {
  customFetch,
  type TrendingResponse,
  type PopularMoviesResponse,
  type TvShowsResponse,
} from '@/utils';
import { type LoaderFunction, useLoaderData } from 'react-router-dom';

export const loader: LoaderFunction = async (): Promise<TrendingResponse> => {
  // /trending/movie/week
  const movieResponse = await customFetch<PopularMoviesResponse>(
    '/trending/movie/week'
  );

  const tvShowResponse = await customFetch<TvShowsResponse>(
    '/trending/tv/week'
  );

  return { trendMovie: movieResponse.data, trendTvShow: tvShowResponse.data };
};

function Landing() {
  const {
    trendMovie: { results: trendMovieData },
    trendTvShow: { results: trendTvShowData },
  } = useLoaderData() as TrendingResponse;

  return (
    <section className='max-w-2xl'>
      <div className='hidden md:block'>
        <SwiperSliderEffect trending={trendMovieData} text='trending movies' />
        <SwiperSliderEffect
          trending={trendTvShowData}
          text='trending tv series'
        />
      </div>
      <div className='block md:hidden'>
        <TrendingMovieLists />
        <TrendingTvShowLists />
      </div>
    </section>
  );
}

export default Landing;
