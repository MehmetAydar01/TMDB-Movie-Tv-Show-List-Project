import { Bookmark, Popcorn } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { moviesLinks, tvShowsLinks } from '@/utils';
import NavbarAccordion from './NavbarAccordion';
import ThemeToggle from './ThemeToggle';

function SideNavLinks() {
  return (
    <nav className='max-w-[280px] min-w-[280px] p-8 bg-muted h-screen sticky top-0 left-0 hidden lg:block'>
      <div className='justify-center items-center flex-col'>
        {/* Trending */}
        <NavLink
          to='/'
          className={({ isActive }) => {
            return `mb-4 uppercase flex items-center w-full ${
              isActive ? 'text-primary' : ''
            }`;
          }}
        >
          <Popcorn className='mr-4' /> <span className='text-xl'>trending</span>
        </NavLink>

        {/* Movies Links */}
        <NavbarAccordion accText='movies' links={moviesLinks} />

        {/* Tv Shows Links */}
        <NavbarAccordion accText='tv shows' links={tvShowsLinks} />

        {/* Bookmarks */}
        <NavLink
          to='bookmarks'
          className={({ isActive }) => {
            return `my-4 uppercase flex items-center w-full ${
              isActive ? 'text-primary' : ''
            }`;
          }}
        >
          <Bookmark className='mr-4' />
          <span className='text-lg'>Bookmark</span>
        </NavLink>

        {/* Theme */}
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default SideNavLinks;
