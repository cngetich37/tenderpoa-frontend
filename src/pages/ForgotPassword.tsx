// import { Link } from "react-router-dom";
import homepic from "../assets/homepic.png";
import { useFormik } from "formik";
import { loginSchema } from "../validationSchemas/validateLoginForm";
import Alert from "@mui/material/Alert";

interface ForgotPasswordFormValues {
  email: string;
}

const loginForm = () => {
  console.log("Password Reset Successful!");
};
const ForgotPassword = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<ForgotPasswordFormValues>({
      initialValues: {
        email: "",
      },
      validationSchema: loginSchema,
      onSubmit: loginForm,
    });
  return (
    <>
      <div
        className="hero h-screen bg-[#800000]"
        style={{ backgroundImage: `url(${homepic})`, backgroundSize: "cover" }}
      >
        <div className="hero-content flex-col justify-center lg:flex-row-reverse">
          <div className="ml-4 flex-col text-center lg:text-center"></div>
          <div className="card flex-shrink-0 w-full max-w-lg bg-white">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
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
              <div className="flex-col gap-2">
                <div className="form-control mt-6">
                  <button
                    className="btn bg-[#000080]  text-white hover:bg-zinc-500 mb-2"
                    type="submit"
                  >
                    Submit
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
