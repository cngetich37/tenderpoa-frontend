import { Link } from "react-router-dom";
import homepic from "../assets/homepic.png";
import { useFormik } from "formik";
import { validSchema } from "../validationSchemas/validateSignUpForm";

interface signUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const submitForm = () => {
  console.log("submitted!");
};
const SignUpPage = () => {
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
      onSubmit: submitForm,
    });
  return (
    <>
      <div
        className="hero h-full "
        style={{ backgroundImage: `url(${homepic}) `, backgroundSize: "cover" }}
      >
        <div className="hero-content flex-col justify-center lg:flex-row-reverse">
          <div className="ml-4 flex-col text-center lg:text-center"></div>
          <div className="card flex-shrink-0 w-full max-w-lg bg-white">
            <h1 className="flex justify-center text-3xl font-bold text-[#800000] font-serif">
              Sign up
            </h1>
            <form
              className="card-body"
              onSubmit={handleSubmit}
              autoComplete="true"
            >
              <div className="form-control">
                <label className="label" htmlFor="firstName">
                  <span className="label-text text-[#800000] text-lg font-semibold font-mono lg:w-screen">
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
              </div>
              {errors.firstName && touched.firstName && (
                <p className="alert bg-[#FF0000] text-white">
                  {errors.firstName}
                </p>
              )}
              <div className="form-control">
                <label className="label" htmlFor="lastName">
                  <span className="label-text text-[#800000] text-lg font-semibold font-mono">
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
              </div>
              {errors.lastName && touched.lastName && (
                <p className="alert bg-[#FF0000] text-white">
                  {errors.lastName}
                </p>
              )}
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text text-[#800000] text-lg font-semibold font-mono">
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
              </div>
              {errors.email && touched.email && (
                <p className="alert bg-[#FF0000] text-white">{errors.email}</p>
              )}
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text text-[#800000] text-lg font-semibold font-mono">
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
              </div>
              {errors.password && touched.password && (
                <p className="alert bg-[#FF0000] text-white">
                  {errors.password}
                </p>
              )}
              <div className="form-control">
                <label className="label" htmlFor="confirmPassword">
                  <span className="label-text text-[#800000] text-lg font-semibold font-mono">
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
                  <p className="alert bg-[#FF0000] text-white mt-2">
                    {errors.confirmPassword}
                  </p>
                )}
                <div className="flex gap-0">
                  <div className="label">
                    <a
                      href="#"
                      className="label-text-alt link text-[#800000] mr-1"
                    >
                      Already have an account?
                    </a>
                    <Link
                      to="/login"
                      className="label-text-alt link text-[#2196F3] font-bold"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#800000] text-white hover:bg-zinc-500">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
