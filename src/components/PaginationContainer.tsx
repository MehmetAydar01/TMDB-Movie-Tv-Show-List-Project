import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  constructPrevOrNextUrl,
  constructUrl,
  type PaginationContainerType,
} from '@/utils';
import { useLoaderData, useLocation } from 'react-router-dom';

function PaginationContainer() {
  const { page } = useLoaderData() as PaginationContainerType;
  const { search, pathname } = useLocation();

  let totalPages = 3;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const renderPagination = pages.map((pageNumber) => {
    const isActive = pageNumber === page;
    const url = constructUrl({ pageNumber, search, pathname });

    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  });

  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    pageCount: totalPages,
    search,
    pathname,
  });

  return (
    <Pagination className='mt-16'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        {renderPagination}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationContainer;
