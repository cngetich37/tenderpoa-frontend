import homepic from "../assets/homepic.png";
import { useFormik } from "formik";
import { loginSchema } from "../validationSchemas/validateLoginForm";
import Alert from "@mui/material/Alert";
import axios from "axios";

interface ResetPasswordFormValues {
  password: string;
}

const ResetPassword = () => {
  const handleResetPassword = async () => {
    // Call the API endpoint to reset the password
    await axios.post(`https://tenderpoa.onrender.com/api/users/reset-password/:token`, values);
    // Display a message to the user indicating that the password has been reset
    <Alert severity="success" className="mt-1">
      Password reset successfully!
    </Alert>;
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<ResetPasswordFormValues>({
      initialValues: {
        password: "",
      },
      validationSchema: loginSchema,
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
              <h1 className="flex justify-center text-3xl font-bold text-[#800000] font-serif">
                Forgot Password
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#800000] text-lg font-semibold">
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
                    onClick={handleResetPassword}
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
