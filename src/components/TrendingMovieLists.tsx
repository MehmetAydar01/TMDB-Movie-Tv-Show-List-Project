import { type TrendingResponse, imageApiUrl } from '@/utils';
import { Link, useLoaderData } from 'react-router-dom';

function TrendingMovieLists() {
  const {
    trendMovie: { results: trendingMovies },
  } = useLoaderData() as TrendingResponse;

  return (
    <>
      <h1 className='capitalize font-semibold text-3xl tracking-wide my-8'>
        trending movies
      </h1>
      <section>
        {trendingMovies.splice(0, 3).map((trend) => {
          return (
            <div key={trend.id} className='mb-10'>
              <Link to={`movies/${trend.id}`}>
                <img
                  src={`${imageApiUrl}${trend.poster_path}`}
                  className='w-full rounded'
                />
              </Link>
              <p className='text-center text-2xl mt-2 font-semibold'>
                {trend.title}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default TrendingMovieLists;
