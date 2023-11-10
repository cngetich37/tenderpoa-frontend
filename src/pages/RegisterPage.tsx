import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <>
      <div className="hero h-full bg-[#800000]">
        <div className="hero-content flex-col justify-center lg:flex-row-reverse">
          <div className="ml-4 flex-col text-center lg:text-center">
            {/* <p className="py-6 text-white text-lg font-mono   font-semibold">Manage Your Bids</p> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg bg-white">
          <h1 className="flex justify-center text-3xl font-bold text-[#800000] font-serif">Sign up</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#800000] text-lg font-semibold font-mono lg:w-screen">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="first name"
                  className="input bg-white input-error w-full max-w-md lg:w-screen"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#800000] text-lg font-semibold font-mono">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="last name"
                  className="input bg-white input-error w-full max-w-md lg:w-screen"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#800000] text-lg font-semibold font-mono">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input bg-white input-error w-full max-w-md lg:w-screen"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#800000] text-lg font-semibold font-mono">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input bg-white input-error w-full max-w-md lg:w-screen"
                  required
                />

                <div className="flex gap-0">
                  <label className="label">
                    <a href="#" className="label-text-alt link text-[#800000] mr-1" >
                      Already have an account? 
                    </a>
                    <Link to="/login" className="label-text-alt link text-[#2196F3] font-bold">Login</Link>
                  </label>
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

export default RegisterPage;
