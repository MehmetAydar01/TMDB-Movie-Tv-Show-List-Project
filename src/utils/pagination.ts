type ConstructUrlParams = {
  pageNumber: number;
  search: string;
  pathname: string;
};

export const constructUrl = ({
  pageNumber,
  search,
  pathname,
}: ConstructUrlParams): string => {
  const searchParams = new URLSearchParams(search);
  searchParams.set('page', pageNumber.toString());
  return `${pathname}?${searchParams.toString()}`;
};

type ConstructPrevOrNextParams = {
  currentPage: number;
  pageCount: number;
  search: string;
  pathname: string;
};

export const constructPrevOrNextUrl = ({
  currentPage,
  pageCount,
  search,
  pathname,
}: ConstructPrevOrNextParams): { prevUrl: string; nextUrl: string } => {
  let prevPage = currentPage - 1;
  if (prevPage < 1) prevPage = pageCount;
  const prevUrl = constructUrl({ pageNumber: prevPage, search, pathname }); // 5.sayfadaysak:  localhost:5173/movie/popular?language=15&page=4

  let nextPage = currentPage + 1;
  if (nextPage > pageCount) nextPage = 1;
  const nextUrl = constructUrl({ pageNumber: nextPage, search, pathname }); // 5.sayfadaysak: localhost:5173/movie/popular?language=15&page=6

  return { prevUrl, nextUrl };
};
