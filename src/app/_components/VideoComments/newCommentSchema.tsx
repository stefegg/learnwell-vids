import * as Yup from "yup";

export const newCommentSchema = Yup.object().shape({
  userName: Yup.string().required("Required"),
  comment: Yup.string().required('Required"'),
});
