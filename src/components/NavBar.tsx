import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="navbar relative bg-[#800000] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-[#800000] hover:text-teal-800 bg-white rounded-box w-48"
            >
              <li>
                <Link to="/alltenders">All Tenders</Link>
              </li>
              <li>
                <Link to="/multistepform">Add a Tender</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl font-serif">
            TenderPoa
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/multistepform">Add a Tender</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Companies</summary>
                <ul className="p-2  bg-white text-[#800000]">
                  <li>
                    <Link to="/intracom">Intracom</Link>
                  </li>
                  <li>
                    <Link to="/saava">Saava</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Steps to Bid</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <Link
            to="/login"
            className="btn text-white bg-[#000080] font-mono hover:bg-slate-600"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn text-white bg-[#228b22] font-mono hover:bg-slate-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
