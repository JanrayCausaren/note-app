import Heading from "@/components/common/Heading";
import TextBody from "@/components/common/TextBody";
import { useGetAllNotes } from "../../api/notes.query";

type Props = {};

const NotesPage = (props: Props) => {
  const { data, isLoading, error } = useGetAllNotes({limit: 3 });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="px-8 py-8">
      <div className="container mx-auto">
        <Heading>Good Morning, Alex</Heading>
        <TextBody>Your creative sanctuary is ready for new ideas.</TextBody>
        <div className="rounded-full py-2 px-4 bg-amber-100 inline-block">
          <TextBody>All Notes All Notes ({data?.message})</TextBody>
        </div>

        <section className="content pt-10 flex flex-wrap gap-4">
          {data?.data.map((item, index) => (
            <div key={item.id} className="card bg-white rounded-2xl p-8 border border-neutral-200">
              <div className="flex flex-col gap-4">
                <Heading as="h5" size="sm" className="text-2xl font-medium">
                  {item.title}
                </Heading>
                <TextBody>
                  {item.content}
                </TextBody>
                <TextBody as="span" size="xs">
                  October 25,2026
                </TextBody>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default NotesPage;
