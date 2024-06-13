import { getVideos } from "../../_api";
import Link from "next/link";
import { format } from "date-fns";

type VideoListProps = {
  query: string;
};
// Displays all videos
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
      className={`border-4 border-cheese rounded-lg flex flex-col grow bg-elecBlue text-white p-4`}
    >
      <div className="text-lg mb-4">Click on any video to start learning!</div>
      <div className="grid grid-cols-3 gap-4  w-full ">
        {filteredVideos.map((v, idx) => {
          return (
            <Link
              key={`${v.title}-${idx}`}
              href={`/watch/${v.id}`}
              className="border-tangerine border-4 w-full rounded-lg min-h-48 max-h-96 cursor-pointer flex flex-col bg-greenLight p-2 items-center gap-2 justify-evenly hover:text-cheese hover:bg-greenDark hover:scale-105 transition-all"
            >
              <div className="text-xl">{v.title}</div>
              <div className="overflow-y-auto text-sm">{v.description}</div>
              <div className="flex flex-row text-sm gap-2">
                <div>{`Comments: ${v.num_comments}`}</div>
                <div>{`Created At: ${format(
                  v.created_at,
                  "MM/dd/yyyy, hh:mm a"
                )}`}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
