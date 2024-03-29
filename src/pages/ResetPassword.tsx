import homepic from "../assets/homepic.png";
import { useFormik } from "formik";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { passwordSchema } from "../validationSchemas/validatePassword";
import { FormikHelpers } from "formik";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
interface ResetPasswordFormValues {
  password: string;
}

const ResetPassword = () => {
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const [resetPasswordError, setResetPasswordError] = useState(false);
  const [token, setToken] = useState<string>("");
  const { token: routeToken } = useParams(); // Assuming the token is a route parameter
  const [resetSuccessful, setResetSuccessful] = useState("");
  const [resetError, setResetError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Make sure routeToken is defined before setting the state
    if (routeToken) {
      setToken(routeToken);
    }
  }, [routeToken]);
  const handleResetPassword = async (
    values: ResetPasswordFormValues,
    { setSubmitting }: FormikHelpers<ResetPasswordFormValues>
  ) => {
    try {
      // Make a POST request using Axios
      const response = await axios.post(
        `https://tenderpoa.onrender.com/api/users/reset-password/${token}`,
        values
      );

      // Handle the response (you can customize this based on your API)
      setResetSuccessful(response.data.message);
      setTimeout(() => {
        setResetPasswordSuccess(true);
        setResetPasswordError(false);
      }, 1000);
      setTimeout(() => {
        navigate("/login");
      }, 4000);
      // Reset the form or perform any other actions on successful submission
    } catch (error: any) {
      // Handle errors (e.g., display an error message)
      setResetError(error.response.data.message);
      setTimeout(() => {
        setResetPasswordError(true);
        setResetPasswordSuccess(false);
      }, 1000);
    } finally {
      // Make sure to set submitting to false, whether the request succeeds or fails
      setSubmitting(false);
    }
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<ResetPasswordFormValues>({
      initialValues: {
        password: "",
      },
      validationSchema: passwordSchema,
      onSubmit: handleResetPassword,
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
            <form className="card-body" onSubmit={handleSubmit}>
              <h1 className="flex justify-center text-3xl font-bold text-[#212121] font-serif">
                Password Reset
              </h1>
              <div className="flex justify-center">
                {resetPasswordSuccess ? (
                  <Alert variant="filled" severity="success">
                    <p>{resetSuccessful}</p>
                  </Alert>
                ) : resetPasswordError ? (
                  <Alert variant="filled" severity="error">
                    <p>{resetError}</p>
                  </Alert>
                ) : null}
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text text-[#212121] text-lg font-semibold">
                    Password
                  </span>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your new password"
                  className="input bg-white input-error w-full max-w-md lg:w-screen text-black"
                  autoComplete="on"
                />
              </div>
              {errors.password && touched.password && (
                <Alert severity="error" className="mt-1">
                  {errors.password}
                </Alert>
              )}
              <div className="flex-col gap-2">
                <div className="form-control mt-6">
                  <button
                    className="btn bg-[#000080]  text-white hover:bg-zinc-500 mb-2"
                    type="submit"
                    onChange={handleChange}
                  >
                    Reset Password
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

export default ResetPassword;
