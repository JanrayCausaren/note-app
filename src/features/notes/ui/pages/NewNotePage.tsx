import { Button } from "@/components/ui/button";
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
    console.log(data);
  };

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
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default NewNote;
