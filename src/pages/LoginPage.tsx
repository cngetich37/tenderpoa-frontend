import { Link } from "react-router-dom";
import homepic from "../assets/homepic.png";
import { useFormik } from "formik";
import { loginSchema } from "../validationSchemas/validateLoginForm";
import Alert from "@mui/material/Alert";
import { FormikHelpers } from "formik";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import handleSignOut from "../components/NavBar";
import { jwtDecode, JwtPayload } from "jwt-decode";
interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [apiLoginSuccess, setApiLoginSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
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

      setApiLoginSuccess(response.data.message);
      // Simulating a successful login after 1 seconds
      setTimeout(() => {
        setLoginSuccess(true);
        setLoginError(false);
      }, 1000);
      setTimeout(() => {
        const token = response.data.token;
        navigate("/dashboard");
        window.location.reload();
        localStorage.setItem("token", token);
      }, 4000);

      // Reset the form or perform any other actions on successful submission
    } catch (error: any) {
      // Handle errors (e.g., display an error message)
      setError(error.response.data.message);
      setTimeout(() => {
        setLoginError(true);
        setLoginSuccess(false);
      }, 2000);
    } finally {
      // Make sure to set submitting to false, whether the request succeeds or fails
      setSubmitting(false);
    }
  };

  useEffect(() => {
    checkTokenExpiration();
  }, []);

  const checkTokenExpiration = () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        const currentTime = Date.now() / 1000;

        if (decoded?.exp && decoded.exp < currentTime) {
          handleSignOut();
        }
      } catch (error) {
        console.error("Error decoding token");
        // Handle the error, e.g., force logout or show an error message
        handleSignOut();
      }
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
        className="hero h-screen bg-white"
        style={{
          backgroundImage: `url(${homepic})`,
          backgroundSize: "contain",
        }}
      >
        <div className="hero-content flex flex-col justify-center items-center">
          <div className="flex-start card w-full max-w-lg bg-gray-100 h-full">
            <form
              className="card-body"
              onSubmit={handleSubmit}
              autoComplete="true"
            >
              <div className="flex flex-col items-center justify-center ">
                <h2 className="font-bold text-2xl text-[#212121] font-serif ">
                  Login
                </h2>
                {loginSuccess ? (
                  <Alert variant="filled" severity="success">
                    <p>{apiLoginSuccess}</p>
                  </Alert>
                ) : loginError ? (
                  <Alert variant="filled" severity="error">
                    <p>{error}</p>
                  </Alert>
                ) : null}
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text text-[#212121] text-lg font-semibold font-mono">
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
                {errors.email && touched.email && (
                  <p className="text-[#FF0000] text-sm"> {errors.email}</p>
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
                  <p className="text-[#FF0000] text-sm"> {errors.password}</p>
                )}
                <div className="flex">
                  <div className="flex-1 label">
                    <Link
                      to="/forgot-password"
                      className="label-text-alt link text-[#212121]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="flex justify-end label">
                    <a href="#" className="label-text-alt link text-[#212121]">
                      Don't have an account?
                    </a>
                    <span className="label">
                      <Link
                        to="/signup"
                        className="label-text-alt link text-[#000080] font-bold font-mono"
                      >
                        Signup
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="form-control mt-6">
                  <button
                    className="rounded-md px-6 py-2 font-bold font-mono bg-[#212121]  text-white hover:bg-zinc-500 mb-2"
                    type="submit"
                  >
                    Login
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
