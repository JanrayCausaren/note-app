import React from "react";
import type { useGetAllNotes } from "../../api/notes.query";
import NoteListSkeleton from "../components/note.list.skeleton";
import { Link } from "react-router";
import Heading from "@/components/common/Heading";
import TextBody from "@/components/common/TextBody";
import { formatDate } from "@/utils/format";
import { href } from "@/app/config/href";
import NotesPagination from "../components/NotesPagination";

type Props = {
  query: ReturnType<typeof useGetAllNotes>;
};

const NotesPageContent = ({ query }: Props) => {
   if (query.isLoading) {
    return <NoteListSkeleton />;
  }

  if (query.isError) {
    return <p>Something went wrong</p>;
  }

  const notes = query.data?.data ?? [];

  if (notes.length === 0) {
    return <p>No notes found.</p>;
  }


  return (
    <section className="content pt-10 flex flex-wrap gap-4">
      {notes.map((item) => (
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
      <NotesPagination totalPages={query.data?.pagination.totalPages ?? 1}></NotesPagination>
    </section>
  );
};

export default NotesPageContent;
