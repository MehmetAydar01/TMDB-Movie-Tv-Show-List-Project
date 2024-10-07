export type Link = {
  href: string;
  label: string;
};

export const moviesLinks: Link[] = [
  {
    href: 'movies/popular',
    label: 'popular',
  },
  {
    href: 'movies/nowplaying',
    label: 'now playing',
  },
  {
    href: 'movies/upcoming',
    label: 'upcoming',
  },
  {
    href: 'movies/toprated',
    label: 'top rated',
  },
];

export const tvShowsLinks: Link[] = [
  {
    href: 'tvshows/popular',
    label: 'popular',
  },
  {
    href: 'tvshows/airingtoday',
    label: 'airing today',
  },
  {
    href: 'tvshows/ontv',
    label: 'on tv',
  },
  {
    href: 'tvshows/toprated',
    label: 'top rated',
  },
];
