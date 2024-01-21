import { Link } from "react-router-dom";
import homepic from "../assets/homepic.png";
import { useFormik } from "formik";
import { validSchema } from "../validationSchemas/validateSignUpForm";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { FormikHelpers } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface signUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpPage = () => {
  const [accountSuccess, setaccountSuccess] = useState(false);
  const [accountError, setAccountError] = useState(false);
  const [apiSignUpSuccess, setSignUpSuccess] = useState("");
  const [errorSignup, setErrorSignup] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (
    values: signUpFormValues,
    { setSubmitting }: FormikHelpers<signUpFormValues>
  ) => {
    try {
      // Make a POST request using Axios
      const response = await axios.post(
        "https://tenderpoa.onrender.com/api/users/signup",
        values
      );

      // Handle the response (you can customize this based on your API)
      setSignUpSuccess(response.data.message);
      setTimeout(() => {
        setaccountSuccess(true);
        setAccountError(false);
      }, 1000);
      setTimeout(() => {
        navigate("/login");
      }, 4000);

      // Reset the form or perform any other actions on successful submission
    } catch (error: any) {
      // Handle errors (e.g., display an error message)
      setErrorSignup(error.response.data.message);
      setTimeout(() => {
        setAccountError(true);
        setaccountSuccess(false);
      }, 1000);
    } finally {
      // Make sure to set submitting to false, whether the request succeeds or fails
      setSubmitting(false);
    }
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<signUpFormValues>({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: validSchema,
      onSubmit: handleSignup,
    });
  return (
    <>
      <div
        className="hero h-full bg-white"
        // style={{ backgroundImage: `url(${homepic}) `, backgroundSize: "contain" }}
        style={{
          backgroundImage: `url(${homepic})`,
          backgroundSize: "contain",
        }}
      >
        <div className="hero-content flex-col justify-center lg:flex-row-reverse ">
          <div className="ml-4 flex flex-col text-center lg:text-center "></div>
          <div className="card flex-shrink-0 w-full max-w-lg bg-gray-100">
            <form
              className="card-body"
              onSubmit={handleSubmit}
              autoComplete="true"
            >
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-[#212121] font-serif">
                  Sign up
                </h1>
                {accountSuccess ? (
                  <Alert variant="filled" severity="success">
                    <p>{apiSignUpSuccess}</p>
                  </Alert>
                ) : accountError ? (
                  <Alert variant="filled" severity="error">
                    <p>{errorSignup}</p>
                  </Alert>
                ) : null}
              </div>
              <div className="form-control">
                <label className="label" htmlFor="firstName">
                  <span className="label-text text-[#212121] text-lg font-semibold font-mono lg:w-screen">
                    First Name
                  </span>
                </label>
                <input
                  id="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="first name"
                  className="input bg-white input-error w-full max-w-md lg:w-screen text-black"
                  autoComplete="on"
                  // className={errors.email && touched.email ? "input-error" : ""}
                />
                {errors.firstName && touched.firstName && (
                  <p className="text-[#FF0000] text-sm">{errors.firstName}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label" htmlFor="lastName">
                  <span className="label-text text-[#212121] text-lg font-semibold font-mono">
                    Last Name
                  </span>
                </label>
                <input
                  id="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="last name"
                  className="input bg-white input-error w-full max-w-md lg:w-screen text-black"
                  autoComplete="on"
                />
                {errors.lastName && touched.lastName && (
                  <p className="text-[#FF0000] text-sm">{errors.lastName}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text text-[#212121] text-lg font-semibold font-mono">
                    Email
                  </span>
                </label>
                <input
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  placeholder="email"
                  className="input bg-white input-error w-full max-w-md lg:w-screen text-black"
                  autoComplete="on"
                />
                {errors.email && touched.email && (
                  <p className="text-[#FF0000] text-sm">{errors.email}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text text-[#212121] text-lg font-semibold font-mono">
                    Password
                  </span>
                </label>
                <input
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  placeholder="password"
                  className="input bg-white input-error w-full max-w-md lg:w-screen text-black"
                  autoComplete="on"
                />
                {errors.password && touched.password && (
                  <p className="text-[#FF0000] text-sm">{errors.password}</p>
                )}
              </div>

              <div className="form-control mb-1">
                <label className="label" htmlFor="confirmPassword">
                  <span className="label-text text-[#212121] text-lg font-semibold font-mono">
                    Confirm Password
                  </span>
                </label>
                <input
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  placeholder="confirm password"
                  className="input bg-white input-error w-full max-w-md lg:w-screen text-black"
                  autoComplete="on"
                />

                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="text-[#FF0000] text-sm">{errors.confirmPassword}</p>
                )}
                <div className="flex gap-0">
                  <div className="label">
                    <a
                      href="#"
                      className="label-text-alt link text-[#212121] mr-1"
                    >
                      Already have an account?
                    </a>
                    <Link
                      to="/login"
                      className="label-text-alt link text-[#000080] font-bold font-mono"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="form-control mt-4">
                  <button
                    className="rounded-md px-6 py-2 bg-[#212121] font-bold font-mono text-white hover:bg-zinc-500"
                    type="submit"
                  >
                    Signup
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

export default SignUpPage;
