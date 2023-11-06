import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="navbar relative bg-slate-100 text-[#800000]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-48"
            >
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>Sign up</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl font-serif">
            TenderPoa
          </Link>
        </div>
        <div className="navbar-end flex gap-2">
          <Link to="/login" className="btn text-white btn-primary font-mono hover:bg-purple-400">
            Login
          </Link>
          <Link to="/signup" className="btn text-white bg-[#800000] font-mono hover:bg-purple-400">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
