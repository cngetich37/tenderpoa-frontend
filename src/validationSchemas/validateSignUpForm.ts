import * as yup from "yup";
// password rules state that a valid password should have a min of 8 characters, at least one uppercase letter, at least one lower case letter,
// and a special character
const passwordRules =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|;:'",.<>?/\\~-]).{8,}$/;

export const validSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "first name can't be less than 3 characters!")
    .max(15, "first name can't be more than 15 characters!")
    .required("Please enter your first name!"),
  lastName: yup
    .string()
    .min(3, "last name can't be less than 3 characters")
    .max(15)
    .required("Please enter your last name!"),
  email: yup
    .string()
    .email("Please enter a valid email!")
    .matches(
      /^(.+)@(intracom\.africa|saava\.co\.ke|benesse\.co\.ke)$/,
      "email must be from Intracom Africa Ltd, Saava Eng. Ltd or Benesse EA Ltd"
    )
    .required("email is required!"),
  password: yup
    .string()
    .min(8, "password is too short!")
    .max(12, "password is too long, maximum of 12 characters!")
    .matches(passwordRules, { message: "Please create a stronger password!" })
    .required("password is required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "password must match!")
    .required("confirm password is required!"),
});
