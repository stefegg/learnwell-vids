import { Input, Button } from "../index";
import { useFormik } from "formik";
import { postVideo } from "@/app/_api";
import { newVideoSchema } from "./newVideoSchema";
import { SetStateAction, Dispatch } from "react";

type NewVideoFormProps = {
  setSubmitted: Dispatch<SetStateAction<string | null>>;
};
// Form for submitting new videos
export default function NewVideoForm(props: NewVideoFormProps) {
  const { setSubmitted } = props;
  const handleSubmit = async () => {
    const resp = await postVideo({
      title: formik.values.title,
      description: formik.values.description,
      videoUrl: formik.values.videoUrl,
    });
    if (resp === 200) {
      setSubmitted("success");
    } else setSubmitted("failure");
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
      className="w-full flex gap-4 flex-col items-center"
    >
      <h2
        className="text-4xl font-extralight"
        style={{
          textShadow: `1px 1px 0px #000000, 5px 4px 0px rgba(0,0,0,0.02)`,
        }}
      >
        Add a New Video
      </h2>
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
