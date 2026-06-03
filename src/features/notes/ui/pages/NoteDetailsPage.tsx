import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";

import Heading from "@/components/common/Heading";
import TextBody from "@/components/common/TextBody";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useGetNote } from "../../api/notes.query";
import { formatDate } from "@/utils/format";
import { useDeleteNote, useUpdateNote } from "../../api/mutation/mutation";
import { toast } from "sonner";
import { href } from "@/app/config/href";

const NoteDetailsPage = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();

   useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);

  const getNote = useGetNote(noteId!);
  const updateNote = useUpdateNote(noteId!);
  const deleteNote = useDeleteNote();
  const { data, isPending, error } = getNote;

  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (isPending) return <div>Loading...</div>;

  if (error) {
    return <div>{error.message}</div>;
  }

 

  const handleEdit = () => {
    setTitle(data.title);
    setContent(data.content);
    setIsEditing(true);
  };

  const handleDelete = () => {
    deleteNote.mutate(noteId!, {
      onSuccess(data, variables, onMutateResult, context) {
        toast.success(data.message);
        console.log("this is outside");

        // navigate(href.notes());
      },
    });
  };

  const handleSave = () => {
    // TODO:
    // update mutation here

    console.log({
      title,
      content,
    });
    updateNote.mutate(
      {
        title,
        content,
      },
      {
        onSuccess(data, variables, onMutateResult, context) {
          return setIsEditing(false);
        },
        onError(error, variables, onMutateResult, context) {
          alert(error.message);
        },
      },
    );
  };

  return (
    <section className="py-10 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
          {/* Header */}
          <div className="space-y-2">
            {isEditing ? (
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            ) : (
              <Heading>{data.title}</Heading>
            )}

            <p className="text-sm text-muted-foreground">
              Updated {formatDate(data.updatedAt)}
            </p>
          </div>

          {/* Content */}
          <div>
            {isEditing ? (
              <Textarea
                rows={10}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            ) : (
              <TextBody>{data.content}</TextBody>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 justify-end">
            <Button asChild variant="outline">
              <Link to="/notes">Back</Link>
            </Button>

            {isEditing ? (
              <>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>

                <Button onClick={handleSave} disabled={updateNote.isPending}>
                  {" "}
                  {updateNote.isPending ? "Saving" : "Save Changes"}
                </Button>
              </>
            ) : (
              <>
                <Button onClick={handleDelete} variant="outline">
                  Delete
                </Button>

                <Button onClick={handleEdit}>Edit Note</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoteDetailsPage;
