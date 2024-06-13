"use client";
import { Input, Button } from "../index";
import { useFormik } from "formik";
import { newVideoSchema } from "./newVideoSchema";
import { postVideo } from "@/app/_api";

export default function NewVideo() {
  const handleSubmit = async () => {
    const resp = await postVideo({
      title: formik.values.title,
      description: formik.values.description,
      videoUrl: formik.values.videoUrl,
    });
    console.log(resp, "----------");
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      videoUrl: "",
      description: "",
    },
    onSubmit: () => {
      handleSubmit();
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: newVideoSchema,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`w-1/2 bg-greenLight h-3/4 rounded-lg p-8 border-cheese border-4 flex flex-col items-center gap-6 text-white`}
    >
      <h2 className="text-4xl font-extralight">Add a New Video</h2>
      <div className="flex flex-row gap-4 w-full">
        <Input
          width={"1/2"}
          label="Video Title"
          name="title"
          onChange={formik.handleChange("title")}
          onBlur={formik.handleBlur("title")}
          value={formik.values.title}
          error={formik.touched.title && formik.errors.title}
        />
        <Input
          width={"1/2"}
          label="Video Url"
          name="videoUrl"
          onChange={formik.handleChange("videoUrl")}
          onBlur={formik.handleBlur("videoUrl")}
          value={formik.values.videoUrl}
          error={formik.touched.videoUrl && formik.errors.videoUrl}
        />
      </div>
      <div className="w-full">
        <Input
          type="textArea"
          width="full"
          label="Video Description"
          name="description"
          onChange={formik.handleChange("description")}
          onBlur={formik.handleBlur("description")}
          value={formik.values.description}
          error={formik.touched.description && formik.errors.description}
        />
      </div>
      <Button
        type="submit"
        buttonText="Submit"
        onClick={formik.handleSubmit}
        size="med"
      />
    </form>
  );
}
