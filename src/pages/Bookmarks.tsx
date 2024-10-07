import { dateModify, imageApiUrl, voteColors } from '@/utils';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getFavList } from '@/features/favlists/favListSlice';

function Bookmarks() {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const { favLists } = useAppSelector((state) => state.favListState);

  const searchMovies = favLists.filter((item) => {
    return item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div>
      <Input
        type='text'
        placeholder='Search a movie'
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        className='w-full mb-10 px-6 py-8 rounded-xl text-xl'
      />

      <h1 className='capitalize text-3xl tracking-wider font-bold text-center'>
        bookmarks
      </h1>
      <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {searchMovies.length > 0 &&
          searchMovies.map((item) => {
            const { id, title, poster_path, release_date, vote_average } = item;
            const voteAveragePerc = Math.round(vote_average * 10);
            const { getYear, shortMonthName, monthNumber } =
              dateModify(release_date);

            return (
              <Card className='min-h-[34rem] relative' key={id}>
                <CardContent className='p-0'>
                  <Link to={`/movies/${id}`}>
                    <img
                      src={`${imageApiUrl}${poster_path}`}
                      alt={title}
                      className='w-full h-[385px] rounded-t-xl object-cover'
                    />
                  </Link>
                  <div className='rounded-b-xl py-6 px-4 relative'>
                    <h2 className='text-xl capitalize font-bold hover:text-primary mt-2'>
                      {title}
                    </h2>
                    <p className='text-lg text-gray-400'>
                      {shortMonthName} {monthNumber}, {getYear}
                    </p>
                    {/* vote average movie */}
                    <div className='percent absolute -top-7 left-4 z-20'>
                      <div
                        className={`w-12 h-12 bg-black rounded-full flex justify-center items-center border-4 ${voteColors(
                          voteAveragePerc
                        )}`}
                      >
                        <p className='relative text-lime-50 w-full h-full flex justify-center items-center'>
                          {voteAveragePerc || 'NR'}
                          {voteAveragePerc ? (
                            <span className='absolute top-2.5 right-1 text-[8px]'>
                              %
                            </span>
                          ) : (
                            ''
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Bookmarks Icon */}
                  <Button
                    size='sm'
                    variant='outline'
                    className='absolute top-2 right-3 rounded-full w-12 h-12 z-40'
                    onClick={() => {
                      dispatch(
                        getFavList({
                          id,
                          poster_path,
                          release_date,
                          title,
                          vote_average,
                        })
                      );
                    }}
                  >
                    <Bookmark className='h-full w-full' />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Bookmarks;
