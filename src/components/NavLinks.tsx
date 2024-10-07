import { AlignLeft, Bookmark, Clapperboard, Popcorn, Tv } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { moviesLinks, tvShowsLinks } from '@/utils';
import ModeToggle from './ModeToggle';

function NavLinks() {
  const renderMovieLinks = moviesLinks.map((item, i) => {
    return (
      <DropdownMenuItem key={i}>
        <NavLink
          to={item.href}
          className={({ isActive }) => {
            return `capitalize text-base ${isActive ? 'text-primary' : ''}`;
          }}
        >
          {item.label}
        </NavLink>
      </DropdownMenuItem>
    );
  });

  const renderTvShowLinks = tvShowsLinks.map((item, i) => {
    return (
      <DropdownMenuItem key={i}>
        <NavLink
          to={item.href}
          className={({ isActive }) => {
            return `capitalize text-base ${isActive ? 'text-primary' : ''}`;
          }}
        >
          {item.label}
        </NavLink>
      </DropdownMenuItem>
    );
  });

  return (
    <nav className='block bg-muted p-6 lg:hidden fixed w-full z-50'>
      <div className='flex justify-between items-center'>
        {/* Menu Links */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className='lg:hidden'>
            <Button variant='outline' size='icon'>
              <AlignLeft />
              <span className='sr-only'>Toggle Links</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-44 -mt-1 lg:hidden'
            align='start'
            sideOffset={25}
          >
            <DropdownMenuItem>
              <NavLink
                to='/'
                className={({ isActive }) => {
                  return `capitalize flex items-center ${
                    isActive ? 'text-primary' : ''
                  }`;
                }}
              >
                <Popcorn className='mr-2 h-4 w-4' />
                <span>trending</span>
              </NavLink>
            </DropdownMenuItem>
            {/* Movies */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Clapperboard className='mr-2 h-4 w-4' />
                <span>Movies</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className='w-36 lg:hidden'>
                  {renderMovieLinks}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            {/* Tv Shows */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Tv className='mr-2 h-4 w-4' />
                <span>Tv Shows</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {renderTvShowLinks}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <NavLink
                to='/bookmarks'
                className={({ isActive }) => {
                  return `capitalize flex items-center ${
                    isActive ? 'text-primary' : ''
                  }`;
                }}
              >
                <Bookmark className='mr-2 h-4 w-4' />
                <span>bookmarks</span>
              </NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme */}
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default NavLinks;
