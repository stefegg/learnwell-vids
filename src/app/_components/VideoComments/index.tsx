import { getVideoComments } from "@/app/_api";

type VideoCommentProps = {
  id: string;
};

export default async function VideoComments(props: VideoCommentProps) {
  const { id } = props;
  const data = await getVideoComments(id);
  return (
    <div className="h-full bg-white w-1/2 flex ">
      <div>hi</div>
    </div>
  );
}
