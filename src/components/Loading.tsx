import { Skeleton } from './ui/skeleton';

function Loading() {
  return (
    <div className='pt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20'>
      {Array.from({ length: 8 }).map((_, index) => {
        return (
          <div key={index} className='flex flex-col space-y-3'>
            <Skeleton className='h-[125px] w-full rounded-xl' />
            <div className='space-y-2'>
              <Skeleton className='h-4 mx-auto w-[200px]' />
              <Skeleton className='h-4 mx-auto w-[200px]' />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Loading;
