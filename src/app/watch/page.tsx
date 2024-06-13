import { Searchbar, Loader, VideoList, ListHeader } from "../_components";
import { Suspense } from "react";

type VideoListPageProps = {
  searchParams?: {
    query?: string;
  };
};

export default async function VideoListPage(props: VideoListPageProps) {
  const { searchParams } = props;
  const query = searchParams?.query || "";
  return (
    <section className="px-8 py-4 h-[calc(100vh-6rem)] flex flex-col gap-6">
      <span className="flex flex-row w-full items-center">
        <ListHeader text="Video List" />
        <div className="ml-auto w-1/3">
          <Searchbar placeholder="Search Videos" />
        </div>
      </span>

      <Suspense fallback={<Loader />}>
        <VideoList query={query} />
      </Suspense>
    </section>
  );
}
