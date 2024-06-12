"use client";
import { getVideos } from "../../_api";
import InnerVideoList from "./list";
import { useEffect, useState } from "react";

export default function VideoList() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const result = await getVideos();
      setVideos(result);
    };
    fetchVideos();
  }, []);
  return (
    <div>
      <InnerVideoList videos={videos} />
    </div>
  );
}
