import Heading from "@/components/common/Heading";
import TextBody from "@/components/common/TextBody";
import { useGetAllNotes } from "../../api/notes.query";
import { Link, useSearchParams } from "react-router";
import { href } from "@/app/config/href";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { formatDate } from "@/utils/format";


const NotesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const rawPage = Number(searchParams.get("page"));
  const page = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  const LIMIT = 10;

  const { data, isLoading, error } = useGetAllNotes({
    page,
    limit: LIMIT,
  });

  const totalPages = data?.pagination.totalPages ?? 1;

  const updatePage = (newPage: number) => {
    setSearchParams((prev) => {
      const params = Object.fromEntries(prev);
      return {
        ...params,
        page: String(newPage),
      };
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div className="px-8 py-8">
      <div className="container mx-auto">
        <Heading>Good Morning, Alex</Heading>

        <TextBody>
          Your creative sanctuary is ready for new ideas.
        </TextBody>

        <div className="rounded-full py-2 px-4 bg-amber-100 inline-block">
          <TextBody>
            All Notes ({data?.pagination.total})
          </TextBody>
        </div>

        <section className="content pt-10 flex flex-wrap gap-4">
          {data?.data.map((item) => (
            <Link to={href.note(item.id)} key={item.id}>
              <div className="card bg-white rounded-2xl p-8 border border-neutral-200">
                <Heading as="h5" size="sm">
                  {item.title}
                </Heading>

                <TextBody>{item.content}</TextBody>
                <TextBody>{formatDate(item.createdAt)}</TextBody>
              </div>
            </Link>
          ))}
        </section>
      </div>

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
    </div>
  );
};

export default NotesPage;
