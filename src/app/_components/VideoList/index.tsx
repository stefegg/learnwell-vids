import { getVideos } from "../../_api";
import InnerVideoList from "./list";
import { useEffect, useState } from "react";

type VideoListProps = {
  query: string;
};

export default async function VideoList(props: VideoListProps) {
  const { query } = props;
  const data = await getVideos();
  const filteredVideos = Array.isArray(data.videos)
    ? data.videos.filter((video) => {
        return video.title.toLowerCase().includes(query.toLowerCase());
      })
    : [];
  return (
    <div
      className={`border-2 border-cheese rounded-lg flex flex-row grow overflow-y-auto`}
    >
      {filteredVideos.map((v, idx) => {
        return <div key={`${v.title}-${idx}`}>{v.title}</div>;
      })}
    </div>
  );
}
