"use client";
import VideoList from "./_components/VideoList";
import { Suspense } from "react";
import { Loader } from "./_components";
export default function Home() {
  return (
    <main className="">
      <Suspense fallback={<Loader />}>
        <VideoList />
      </Suspense>
    </main>
  );
}
