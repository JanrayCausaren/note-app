import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNoteSchema } from "../../schema/note.schema";
import { useCreateNote } from "../../api/notes.query";
import { useNavigate } from "react-router";
import { href } from "@/app/config/href";
import { LoadingButton } from "@/components/common/LoadingButton";

type CreateNoteForm = {
  title: string;
  content: string;
};

const NewNote = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNoteForm>({
    defaultValues: {
      title: "",
      content: "",
    },
    resolver: zodResolver(createNoteSchema),
  });

  const onSubmit = (data: CreateNoteForm) => {
    createNoteMutation.mutate(data, {
      onSuccess: () => {
        console.log("successs hahahah");
        navigate(href.notes());
      },
    });
    console.log(data);
  };

  const createNoteMutation = useCreateNote();
  const navigate = useNavigate();

  const {isPending} = createNoteMutation;

  return (
    <div className="w-full container px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Create New Note</FieldLegend>
            <FieldDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
              praesentium?
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Title
                </FieldLabel>
                <Input
                  {...register("title")}
                  id="checkout-7j9-card-name-43j"
                  placeholder=""
                  required
                />
                {errors.title && (
                  <p className="text-sm text-destructive">
                    {errors.title.message}
                  </p>
                )}
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Content
                </FieldLabel>
                <Textarea
                  {...register("content")}
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
                {errors.content && (
                  <p className="text-sm text-destructive">
                    {errors.content.message}
                  </p>
                )}
              </Field>
            </FieldGroup>
          </FieldSet>

          <Field orientation="horizontal">
            <LoadingButton type="submit" isLoading={isPending}>Submit</LoadingButton>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default NewNote;
