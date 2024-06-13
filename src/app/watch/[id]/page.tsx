// import { useState } from "react";
import { VideoPlayer, Loader, VideoComments, Button } from "@/app/_components";
import { Suspense } from "react";
import AddComment from "@/app/_components/VideoComments/addComment";

type WatchPageProps = {
  params: { id: string };
};

export default function WatchPage(props: WatchPageProps) {
  const {
    params: { id },
  } = props;

  return (
    <section className="h-[calc(100vh-6rem)] p-8 w-full flex flex-row">
      <Suspense fallback={<Loader />}>
        <VideoPlayer id={id} />
      </Suspense>
      <div className="ml-auto w-1/3 h-full flex flex-col gap-4">
        <VideoComments id={id} />
      </div>
    </section>
  );
}
