import * as Yup from "yup";

export const newVideoSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  videoUrl: Yup.string().required("Required"),
});
