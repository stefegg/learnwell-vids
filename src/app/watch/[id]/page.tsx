import { VideoPlayer, Loader } from "@/app/_components";
import { Suspense } from "react";

type WatchPageProps = {
  params: { id: string };
};

export default function WatchPage(props: WatchPageProps) {
  const {
    params: { id },
  } = props;
  return (
    <section className="h-[calc(100vh-6rem)] py-2 px-4">
      <Suspense fallback={<Loader />}>
        <VideoPlayer id={id} />
      </Suspense>
    </section>
  );
}
