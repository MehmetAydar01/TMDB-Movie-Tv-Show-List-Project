// MOVIE RESPONSE TYPE

export type PopularMoviesResponse = {
  dates?: {
    maximum?: string;
    minimum?: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  media_type?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

// TYPE WITH PAGE PARAMS

export type Params = {
  page?: number;
};

export type PopularMoviesResponseWithParams = PopularMoviesResponse & {
  params: Params;
};

// NOW PLAYING MOVIES RESPONSE TYPE

export type NowPlayingMoviesResponse = PopularMoviesResponse;
export type NowPlayingMoviesResponseWithParams = NowPlayingMoviesResponse & {
  params: Params;
};

// UPCOMING MOVIES RESPONSE TYPE

export type UpcomingMoviesResponse = PopularMoviesResponse;
export type UpcomingMoviesResponseWithParams = UpcomingMoviesResponse & {
  params: Params;
};

// TOP RATED MOVIES RESPONSE TYPE

export type TopRatedMoviesResponse = PopularMoviesResponse;
export type TopRatedMoviesResponseWithParams = TopRatedMoviesResponse & {
  params: Params;
};

// TV SHOWS RESPONSE TYPE
export type TvShowsResponse = {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
};

export type TvShow = {
  adult?: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  media_type?: string;
  vote_average: number;
  vote_count: number;
};

export type TvShowsResponseWithParams = TvShowsResponse & {
  params: Params;
};

export type Genres = {
  id: number;
  name: string;
};

export type ProdComp = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type ProdCountries = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type SingleMovieResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProdComp[];
  production_countries: ProdCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type VideoObj = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type VideoResponse = {
  id: number;
  results: VideoObj[];
};

export type SingleMovieResponseWithVideo = VideoResponse & SingleMovieResponse;

export type CreatedBy = {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
};

export type LastEpisodeToAir = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
};

export type Networks = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type Seasons = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

export type SingleTvShowResponse = {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genres[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir[];
  name: string;
  next_episode_to_air: string;
  networks: Networks[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProdComp[];
  production_countries: ProdCountries[];
  seasons: Seasons[];
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

export type SingleTvShowResponseWithVideo = VideoResponse &
  SingleTvShowResponse;

export type TrendingResponse = {
  trendMovie: PopularMoviesResponse;
  trendTvShow: TvShowsResponse;
};

export type PaginationContainerType =
  | PopularMoviesResponseWithParams
  | TvShowsResponseWithParams;
