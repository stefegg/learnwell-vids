"use client";
import { getVideoComments } from "@/app/_api";
import AddComment from "./addComment";
import { useEffect, useState, useRef } from "react";
import { Comment } from "@/app/_api";
import { format } from "date-fns";

type VideoCommentProps = {
  id: string;
};

export default function VideoComments(props: VideoCommentProps) {
  const { id } = props;
  const [comments, setComments] = useState<Comment[] | []>([]);
  const bottomOfList = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchComments = async () => {
      const data = await getVideoComments(id);
      setComments(data.comments);
    };
    fetchComments();
  }, []);

  return (
    <div className="h-full w-full flex flex-col rounded-lg p-4 relative z-10 bg-elecBlue text-white">
      <div className="text-2xl mb-2">Comments</div>
      <div className="flex flex-col grow overflow-y-auto gap-4 mb-4">
        {comments.map((comment, idx) => (
          <div
            key={`${comment.user_id}-${idx}`}
            className="h-24 border-2 border-tangerine flex flex-col px-4 py-1 rounded-lg  text-textDark justify-evenly bg-greenLight"
          >
            <div className="text-sm">{comment.user_id}</div>
            <div className="overflow-y-auto bg-white rounded-md pl-2 text-sm">
              {comment.content}
            </div>
            <div className="text-sm">
              {format(comment.created_at, "MM/dd/yyyy, hh:mm a")}
            </div>
          </div>
        ))}
        <div ref={bottomOfList} className={`h-0 w-0`} />
      </div>
      <AddComment
        id={id}
        comments={comments}
        setComments={setComments}
        bottomRef={bottomOfList}
      />
    </div>
  );
}
