// import { Link } from "react-router-dom";
import homepic from "../assets/homepic.png";
import { useFormik } from "formik";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { FormikHelpers } from "formik";
import { emailSchema } from "../validationSchemas/validateEmail";
import { useState } from "react";

interface ForgotPasswordFormValues {
  email: string;
}

const ForgotPassword = () => {
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(false);
  const [forgotPasswordError, setForgotPasswordError] = useState(false);
  const handleForgotPassword = async (
    values: ForgotPasswordFormValues,
    { setSubmitting }: FormikHelpers<ForgotPasswordFormValues>
  ) => {
    try {
      // Make a POST request using Axios
      const response = await axios.post(
        // "http://localhost:5001/api/users/forgot-password",
        "https://tenderpoa.onrender.com/api/users/forgot-password",
        values
      );

      // Handle the response (you can customize this based on your API)
      console.log(response.data);
      setTimeout(() => {
        setForgotPasswordSuccess(true);
        setForgotPasswordError(false);
      }, 1000);

      // Reset the form or perform any other actions on successful submission
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error("Error during forgot password:", error);
      setTimeout(() => {
        setForgotPasswordError(true);
        setForgotPasswordSuccess(false);
      }, 1000);
    } finally {
      // Make sure to set submitting to false, whether the request succeeds or fails
      setSubmitting(false);
    }
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<ForgotPasswordFormValues>({
      initialValues: {
        email: "",
      },
      validationSchema: emailSchema,
      onSubmit: handleForgotPassword,
    });
  return (
    <>
      <div
        className="hero h-screen bg-white"
        style={{ backgroundImage: `url(${homepic})`, backgroundSize: "cover" }}
      >
        <div className="hero-content flex-col justify-center lg:flex-row-reverse">
          <div className="ml-4 flex-col text-center lg:text-center"></div>
          <div className="card flex-shrink-0 w-full max-w-lg bg-white">
            <form
              className="card-body"
              onSubmit={handleSubmit}
              autoComplete="true"
            >
              <h1 className="flex justify-center text-3xl font-bold text-[#800000] font-serif">
                Forgot Password
              </h1>
              <div className="flex justify-center">
                {forgotPasswordSuccess ? (
                  <Alert severity="success">
                    <p>Password Reset Email Sent!</p>
                  </Alert>
                ) : forgotPasswordError ? (
                  <Alert severity="error" sx={{ color: "#FF0000" }}>
                    <p>User not found!</p>
                  </Alert>
                ) : null}
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text text-[#800000] text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email"
                  className="input bg-white input-error w-full max-w-md lg:w-screen text-black"
                  autoComplete="on"
                />
              </div>
              {errors.email && touched.email && (
                <Alert severity="error" className="mt-1">
                  {errors.email}
                </Alert>
              )}
              <div className="flex-col gap-2">
                <div className="form-control mt-6">
                  <button
                    className="btn bg-[#000080]  text-white hover:bg-zinc-500 mb-2"
                    type="submit"
                  >
                    Forgot Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
