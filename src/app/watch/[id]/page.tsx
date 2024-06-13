import { VideoPlayer, Loader, VideoComments } from "@/app/_components";
import { Suspense } from "react";

type WatchPageProps = {
  params: { id: string };
};

export default function WatchPage(props: WatchPageProps) {
  const {
    params: { id },
  } = props;
  return (
    <section className="h-[calc(100vh-6rem)] p-4 w-full bg-red-500 flex flex-row gap-4">
      <Suspense fallback={<Loader />}>
        <VideoPlayer id={id} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <VideoComments id={id} />
      </Suspense>
    </section>
  );
}
