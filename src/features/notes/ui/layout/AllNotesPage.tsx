import { useSearchParams } from "react-router";
import { useGetAllNotes } from "../../api/notes.query";
import NotesPageLayout from "./NotesPageLayout";
import NotesPageContent from "../pages/NotesPageContent";

const AllNotesPage = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const rawPage = Number(searchParams.get("page"));
  const page = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  const LIMIT = 10;

  const query = useGetAllNotes({
    page,
    limit: LIMIT,
  });

  const { data } = query;

  return (
    <>
      <NotesPageLayout totalNotes={data?.pagination.total}>
        <NotesPageContent query={query}></NotesPageContent>
        
      </NotesPageLayout>
    </>
  );
};

export default AllNotesPage;
