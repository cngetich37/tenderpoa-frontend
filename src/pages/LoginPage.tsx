import { Link } from "react-router-dom";
import homepic from "../assets/homepic.png";
import { useFormik } from "formik";
import { loginSchema } from "../validationSchemas/validateLoginForm";
import Alert from "@mui/material/Alert";
interface LoginFormValues {
  email: string;
  password: string;
}

const loginForm = () => {
  console.log("Login successful!");
};

const LoginPage = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<LoginFormValues>({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: loginForm,
    });
  return (
    <>
      <div
        className="hero h-full"
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
                  placeholder="email"
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
                <div className="label">
                  <a href="#" className="label-text-alt link text-[#800000]">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="flex-col gap-2">
                <div className="form-control mt-6">
                  <button className="btn bg-[#000080]  text-white hover:bg-zinc-500 mb-2">
                    Login
                  </button>
                  <Link
                    to="/loginsso"
                    className="btn bg-[#800000]  text-white hover:bg-red-700"
                  >
                    Login with SSO
                  </Link>
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
