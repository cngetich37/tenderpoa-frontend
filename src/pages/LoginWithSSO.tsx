const LoginWithSSO = () => {
  return (
    <>
      <div className="hero h-screen bg-[#800000]">
        <div className="hero-content flex-col justify-center lg:flex-row-reverse">
          <div className="ml-4 flex-col text-center lg:text-center">
            {/* <h1 className="text-5xl font-bold text-white">
          Tender Poa
        </h1> */}
            {/* <p className="py-6 text-white text-lg font-mono   font-semibold">Manage Your Bids</p> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg bg-white">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#800000] text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input bg-white input-error w-full max-w-md lg:w-screen text-black"
                  required
                />
              </div>
              <div className="flex-col gap-2">
                <div className="form-control mt-6">
                  <button
                    className="btn bg-[#000080]  text-white hover:bg-zinc-500 mb-2"
                    onClick={() => {
                      <div className="alert alert-success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>code has been sent your email!</span>
                      </div>;
                    }}
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

export default LoginWithSSO;
