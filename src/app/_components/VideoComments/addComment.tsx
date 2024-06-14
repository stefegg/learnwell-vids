"use client";
import { Input, Button } from "../index";
import { useFormik } from "formik";
import { newCommentSchema } from "./newCommentSchema";
import { useState, Dispatch, SetStateAction, RefObject } from "react";
import { postComment } from "@/app/_api";
import { Comment } from "@/app/_api";

type AddCommentProps = {
  id: string;
  comments: Comment[];
  setComments: Dispatch<SetStateAction<Comment[]>>;
  bottomRef: RefObject<HTMLDivElement>;
};
//Add comments slide in
export default function AddComment(props: AddCommentProps) {
  const { id, comments, setComments, bottomRef } = props;
  const [showAdd, setShowAdd] = useState<boolean>(false);

  const getTranslate = () => {
    if (showAdd === false) {
      return `translate-x-[100vw]`;
    } else return null;
  };

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
    setShowAdd(false);
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
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
    <>
      <Button
        buttonText="Add Comment"
        size="med"
        onClick={() => setShowAdd(true)}
      />
      <div
        className={`flex flex-col absolute transition duration-1000 ${getTranslate()} z-20 bg-elecBlue right-6 pb-8 px-4`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className={`gap-6 flex-col h-full flex w-full pt-8`}
        >
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
              buttonText="Cancel"
              size="med"
              onClick={() => setShowAdd(false)}
            />
            <Button
              buttonText="Submit Comment"
              size="med"
              onClick={formik.handleSubmit}
            />
          </div>
        </form>
      </div>
    </>
  );
}
