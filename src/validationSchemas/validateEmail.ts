import * as yup from "yup";
export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email!")
    // .matches(
    //   /^(.+)@(intracom\.africa|saava\.co\.ke|benesse\.co\.ke)$/,
    //   "Invalid email!"
    // )
    .required("email is required!"),
});
