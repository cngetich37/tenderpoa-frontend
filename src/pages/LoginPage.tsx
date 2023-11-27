import { Link } from "react-router-dom";
import homepic from "../assets/homepic.png";
import { useFormik } from "formik";
import { loginSchema } from "../validationSchemas/validateLoginForm";
import Alert from "@mui/material/Alert";
import { FormikHelpers } from "formik";
import axios from "axios";
import { useState } from "react";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const handleLogin = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    try {
      // Make a POST request using Axios
      const response = await axios.post(
        "https://tenderpoa.onrender.com/api/users/login",
        values
      );

      // Handle the response
      console.log(response.data);
      // Simulating a successful login after 2 seconds
      setTimeout(() => {
        setLoginSuccess(true);
        setLoginError(false);
      }, 1000);

      // Reset the form or perform any other actions on successful submission
    } catch (error) {
      // Handle errors (e.g., display an error message)
      // Simulating a login error after 3 seconds
      console.log(error);
      setTimeout(() => {
        setLoginError(true);
        setLoginSuccess(false);
      }, 2000);

      console.error("Error during login:", error);
    } finally {
      // Make sure to set submitting to false, whether the request succeeds or fails
      setSubmitting(false);
    }
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<LoginFormValues>({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: handleLogin,
    });
  return (
    <>
      <div
        className="hero h-full bg-white"
        style={{ backgroundImage: `url(${homepic})`, backgroundSize: "cover" }}
      >
        <div className="hero-content flex-col justify-center lg:flex-row-reverse">
          <div className="ml-4 flex-col text-center lg:text-center"></div>

          <div className="card flex-shrink-0 w-full max-w-lg bg-white">
            <h1 className="flex justify-center text-3xl font-bold text-[#800000] font-serif">
              Login
            </h1>

            <form
              className="card-body"
              onSubmit={handleSubmit}
              autoComplete="true"
            >
              <div className="flex-col justify-center">
                {loginSuccess ? (
                  <Alert severity="success">
                    <p>Login successful!</p>
                  </Alert>
                ) : loginError ? (
                  <Alert severity="error" sx={{ color: "#FF0000" }}>
                    <p>Invalid email or password!</p>
                  </Alert>
                ) : null}
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text text-[#800000] text-lg font-semibold font-mono">
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

              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text text-[#800000] text-lg font-semibold font-mono">
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
                  placeholder="password"
                  className="input bg-white input-error w-full max-w-md lg:w-screen text-black"
                  autoComplete="on"
                />
                {errors.password && touched.password && (
                  <Alert severity="error" className="mt-2">
                    {errors.password}
                  </Alert>
                )}
                <div className="flex">
                  <div className="flex-1 label">
                    <Link
                      to="/forgot-password"
                      className="label-text-alt link text-[#800000]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="flex justify-end label">
                    <a href="#" className="label-text-alt link text-[#800000]">
                      Don't have an account?
                    </a>
                    <span className="label">
                      <Link
                        to="/signup"
                        className="label-text-alt link text-[#2196F3] font-bold"
                      >
                        Signup
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-col gap-2">
                <div className="form-control mt-6">
                  <button
                    className="btn bg-[#000080]  text-white hover:bg-zinc-500 mb-2"
                    type="submit"
                  >
                    Login
                  </button>
                  <button
                    className="btn bg-[#800000]  text-white hover:bg-red-700"
                    type="submit"
                  >
                    <Link to="/loginsso">Login with SSO</Link>
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

export default LoginPage;
