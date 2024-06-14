"use client";
import { getVideoComments } from "@/app/_api";
import { useEffect, useState, useRef } from "react";
import { Comment } from "@/app/_api";
import { format } from "date-fns";
import { useFormik } from "formik";
import { newCommentSchema } from "./newCommentSchema";
import { Input, Button } from "../index";

type VideoCommentProps = {
  id: string;
};
//Displays existing comments on a video
export default function VideoComments(props: VideoCommentProps) {
  const { id } = props;
  const [comments, setComments] = useState<Comment[] | []>([]);
  const bottomOfList = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchComments = async () => {
      const data = await getVideoComments(id);
      setComments(data.comments);
    };
    // fetchComments();
  });

  const handleSubmit = async () => {
    // const resp = await postComment({
    //   video_id: id,
    //   content: formik.values.comment,
    //   user_id: formik.values.userName,
    // });
    setComments([
      {
        created_at: new Date(),
        content: formik.values.comment,
        user_id: formik.values.userName,
        video_id: id,
        id: id,
      },
      ...comments,
    ]);
    // setShowAdd(false);
    // bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    formik.setFieldValue("comment", "");
    formik.setFieldTouched("comment", false);
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      comment: "",
    },
    onSubmit: () => {
      handleSubmit();
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: newCommentSchema,
  });

  return (
    <div className="h-full w-full flex flex-col rounded-lg p-4 bg-elecBlue text-white">
      <div
        className="text-2xl mb-2"
        style={{
          textShadow: `1px 1px 0px #000000, 5px 4px 0px rgba(0,0,0,0.02)`,
        }}
      >
        Comments
      </div>
      <form onSubmit={formik.handleSubmit} className={`flex-col flex w-full `}>
        <Input
          label="User Name"
          name="userName"
          onChange={formik.handleChange("userName")}
          onBlur={formik.handleChange("userName")}
          value={formik.values.userName}
          error={formik.touched.userName && formik.errors.userName}
        />
        <Input
          label="Comment"
          type="textArea"
          name="comment"
          onChange={formik.handleChange("comment")}
          onBlur={formik.handleChange("comment")}
          value={formik.values.comment}
          error={formik.touched.comment && formik.errors.comment}
        />
        <div className="flex flex-row w-full justify-between mt-auto gap-2">
          <Button
            buttonText="Submit Comment"
            size="sm"
            onClick={formik.handleSubmit}
          />
        </div>
      </form>
      <div className="flex flex-col grow overflow-y-auto gap-4  mt-2 bg-greenDark">
        {comments.map((comment, idx) => (
          <div
            key={`${comment.user_id}-${idx}`}
            className="h-24 border-2 border-tangerine flex flex-col px-4 py-1 rounded-lg text-textDark justify-evenly bg-greenLight"
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
    </div>
  );
}
