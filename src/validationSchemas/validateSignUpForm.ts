import * as yup from "yup";
// password rules state that a valid password should have a min of 8 characters, at least one uppercase letter, at least one lower case letter,
// and a special character
const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|;:'",.<>?/\\~-]).{8,}$/;

export const validSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name!"),
  lastName: yup.string().required("Please enter your last name!"),
  email: yup
    .string()
    .email("Please enter a valid email!")
    .required("email is required!"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "Please create a stronger password!" })
    .required("password is required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords must match!")
    .required("confirm password is required!"),
});
