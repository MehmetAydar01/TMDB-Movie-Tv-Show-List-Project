import { type TrendingResponse, imageApiUrl } from '@/utils';
import { Link, useLoaderData } from 'react-router-dom';

function TrendingTvShowLists() {
  // const { results: trendingTvShows } = useLoaderData() as TvShowsResponse;
  const {
    trendTvShow: { results: trendingTvShows },
  } = useLoaderData() as TrendingResponse;

  return (
    <>
      <h1 className='capitalize font-semibold text-3xl tracking-wide my-8'>
        trending tv series
      </h1>
      <section className=''>
        {trendingTvShows.splice(0, 3).map((trend) => {
          return (
            <div key={trend.id} className='mb-10'>
              <Link to={`tvshows/${trend.id}`}>
                <img
                  src={`${imageApiUrl}${trend.poster_path}`}
                  className='w-full rounded'
                />
              </Link>
              <p className='text-center text-2xl mt-2 font-semibold'>
                {trend.name}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default TrendingTvShowLists;
