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