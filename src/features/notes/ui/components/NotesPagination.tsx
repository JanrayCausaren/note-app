import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";
import { useSearchParams } from "react-router";

type Props = {
    totalPages: number
};

const NotesPagination = ({totalPages}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawPage = Number(searchParams.get("page"));
  const page = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;
  const updatePage = (newPage: number) => {
    setSearchParams((prev) => {
      const params = Object.fromEntries(prev);
      return {
        ...params,
        page: String(newPage),
      };
    });
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page > 1) updatePage(page - 1);
            }}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => {
          const pageNumber = i + 1;

          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href="#"
                isActive={page === pageNumber}
                onClick={(e) => {
                  e.preventDefault();
                  updatePage(pageNumber);
                }}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page < totalPages) updatePage(page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default NotesPagination;
