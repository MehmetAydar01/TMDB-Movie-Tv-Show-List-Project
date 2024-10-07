import { Button } from '@/components/ui/button';
import {
  customFetch,
  imageApiUrl,
  voteColors,
  type SingleMovieResponse,
  type SingleMovieResponseWithVideo,
  type VideoResponse,
} from '@/utils';
import { Link, type LoaderFunction, useLoaderData } from 'react-router-dom';

export const loader: LoaderFunction = async ({
  params,
}): Promise<SingleMovieResponseWithVideo> => {
  const response = await customFetch<SingleMovieResponse>(
    `/movie/${params.id}`
  );

  const videoResponse = await customFetch<VideoResponse>(
    `/movie/${params.id}/videos`
  );

  return { ...response.data, ...videoResponse.data };
};

function SingleMovie() {
  const {
    poster_path,
    release_date,
    original_title,
    title,
    overview,
    genres,
    vote_average,
    homepage,
  } = useLoaderData() as SingleMovieResponse;

  const { results: videoResults } = useLoaderData() as VideoResponse;

  const videoInfo = {
    key: 'video key',
    name: 'video name',
    type: 'video type',
  };

  const {
    key: videoKey,
    name: videoName,
    type: videoType,
  } = videoResults.length > 0 ? videoResults[0] || videoResults[1] : videoInfo;

  const voteAveragePerc = Math.round(vote_average * 10);

  return (
    <section className='grid lg:grid-cols-2'>
      <div>
        <img
          src={`${imageApiUrl}${poster_path}`}
          alt={original_title}
          className='object-cover w-full h-[40rem] lg:h-[86%] rounded mb-4 md:mb-0'
        />
      </div>
      <div className='lg:ml-12'>
        <h1 className='text-3xl capitalize tracking-wide font-semibold mb-4 mt-5 lg:mt-0'>
          {title}
        </h1>
        <p className='text-lg font-light mb-4'>
          <span className='mr-2'>{release_date.split('-').join('/')}</span>
          {genres &&
            genres.map((gen, i) => {
              return (
                <span key={gen.id}>
                  {gen.name}
                  {genres.length === i + 1 ? '' : ', '}
                </span>
              );
            })}
        </p>
        <div
          className={`w-12 h-12 bg-black rounded-full flex justify-center items-center border-4 mb-4 ${voteColors(
            voteAveragePerc
          )}`}
        >
          <p className='relative text-lime-50 w-full h-full flex justify-center items-center'>
            {voteAveragePerc || 'NR'}
            {voteAveragePerc ? (
              <span className='absolute top-2.5 right-1 text-[8px]'>%</span>
            ) : (
              ''
            )}
          </p>
        </div>
        {overview && (
          <>
            <h2 className='text-xl tracking-wide mb-4 capitalize'>overview</h2>
            <p className='mb-4 tracking-wide'>{overview}</p>
          </>
        )}

        {homepage && (
          <Button asChild size='default' variant='outline' className='mb-4'>
            <Link to={homepage}>
              Homepage:
              {title.length >= 15 ? (
                <span className='pl-0.5'>{title.slice(0, 15)}...</span>
              ) : (
                <span className='pl-0.5'>{title}</span>
              )}
            </Link>
          </Button>
        )}

        {videoResults.length > 0 && (
          <>
            <h3 className='text-base mb-4'>{videoName}</h3>
            <iframe
              className='w-full h-56 rounded mb-4'
              src={`https://www.youtube.com/embed/${videoKey}`}
              title={videoName}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
            <p className='text-sm'>Type: {videoType}</p>
          </>
        )}
      </div>
    </section>
  );
}

export default SingleMovie;
