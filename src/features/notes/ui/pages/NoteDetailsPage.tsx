import { useParams } from "react-router";
import { useGetNote } from "../../api/notes.query";

type Props = {};

const NoteDetailsPage = (props: Props) => {
  const { noteId } = useParams();

  const { data, isPending, isLoading, error } = useGetNote(noteId!);

  if (isLoading) {
    <div>Loadingggggg</div>;
  }

  if (isPending) return <div>pending</div>;
  
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <div>{data.title}</div>
    </div>
  );
};

export default NoteDetailsPage;
