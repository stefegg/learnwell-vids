import { getVideo } from "@/app/_api";

type VideoPlayerProps = {
  id: string;
};

export default async function VideoPlayer(props: VideoPlayerProps) {
  const { id } = props;
  const data = await getVideo(id);
  const fixUrl = () => {
    // convert watch URLs to embed URLs
    if (data.video.video_url.includes("youtube.com/watch")) {
      const splicedId = data.video.video_url.split("=")[1];
      return `https://www.youtube.com/embed/${splicedId}`;
    }
    if (
      data.video.video_url.includes("vimeo") &&
      !data.video.video_url.includes("player")
    ) {
      const splicedId = data.video.video_url.split(".com/")[1];
      return `https://player.vimeo.com/video/${splicedId}`;
    }
  };
  return (
    <div className="h-full flex flex-col  w-1/2">
      <iframe
        src={fixUrl()}
        title={data.video.title}
        allowFullScreen
        height="400rem"
        width="750rem"
      />
    </div>
  );
}
