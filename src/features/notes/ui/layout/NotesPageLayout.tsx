import Heading from "@/components/common/Heading";
import TextBody from "@/components/common/TextBody";


type Props = {
  children: React.ReactNode;
  totalNotes?: number;
};

export default function NotesPageLayout({ children, totalNotes }: Props) {

  return (
    <div className="px-8 py-8 h-full">
      <div className="container mx-auto">
        <Heading>Good Morning, Alex</Heading>

        <TextBody>Your creative sanctuary is ready for new ideas.</TextBody>

        <div className="rounded-full py-2 px-4 bg-amber-100 inline-block">
          <TextBody>All Notes ({totalNotes})</TextBody>
        </div>

        {children}
      </div>
      {/* <Pagination>
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
      </Pagination> */}
    </div>
  );
}
