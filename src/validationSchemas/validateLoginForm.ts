import * as yup from "yup";
// password rules state that a valid password should have a min of 8 characters, at least one uppercase letter, at least one lower case letter,
// and a special character
const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|;:'",.<>?/\\~-]).{8,}$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email!")
    .required("email is required!"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "Please enter a valid password!" })
    .required("password is required!"),
});
