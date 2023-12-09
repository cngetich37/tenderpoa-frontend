import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };
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
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/addtender">Add Tender</Link>
              </li>
              <li>
                <Link to="/makeBid">Make Bid</Link>
              </li>
              <li>
                <Link to="#">Documents</Link>
              </li>
              <li>
                <Link to="/howtoBid">How to Bid</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl font-serif">
            Tenderpoa
          </Link>
        </div>
        {isUserSignedIn ? (
          <>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/addtender">Add Tender</Link>
                </li>
                <li tabIndex={0}>
                  <details>
                    <summary>Bidding</summary>
                    <ul className="p-2  bg-white text-[#800000]">
                      <li>
                        <Link to="/makeBid">Make Bid</Link>
                      </li>
                      <li>
                        <Link to="/howtoBid">How to Bid</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link to="#">Documents</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end flex gap-2">
              <Link
                to="/allopentenders"
                className="rounded-md text-white px-2 py-2 bg-[#7c3aed] font-semibold font-mono hover:bg-[#9d174d]"
              >
                Tenders
              </Link>
              <Link
                to="/login"
                className="rounded-md text-white px-2 py-2 text-md bg-[#FF0000] font-semibold font-mono hover:bg-[#9d174d]"
                onClick={handleSignOut}
              >
                Logout
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-end flex gap-2">
              <Link
                to="/login"
                className="rounded-md px-4 py-2 text-white bg-[#000080] font-mono font-semibold hover:bg-slate-600"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-md px-4 py-2 text-white bg-[#228b22] font-mono font-semibold hover:bg-slate-600"
              >
                Signup
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;
