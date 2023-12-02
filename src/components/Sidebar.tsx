import { Link, useNavigate } from "react-router-dom";
import intracompic from "../assets/intracom.jpeg";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/login");
  };
  return (
    <>
      <div className="flex h-auto">
        <div>
          <div className="h-auto bg-[#510000] sm:h-screen ">
            <div className="sidebar min-h-screen w-[3.35rem] lg:w-56 overflow-hidden border-r  hover:w-56 hover:shadow-lg">
              <div className="flex h-auto flex-col justify-between pt-3 pb-3">
                <div>
                  <div className="ml-12 w-max p-2">
                    <img
                      src={intracompic}
                      className="rounded-full border-white h-20"
                      alt=""
                    />
                  </div>
                  <ul className="mt-4 space-y-2 tracking-wide ">
                    <li className="min-w-max">
                      <Link
                        to="/allopentenders"
                        aria-label="dashboard"
                        className="relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:text-white bg-gradient-to-r from-white to-[#800000]"
                      >
                        <svg
                          className="-ml-1 h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                            className="fill-current text-[#800000] dark:fill-[#800000]"
                          ></path>
                          <path
                            d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                            className="fill-current text-[#800000] group-hover:text-[#800000]"
                          ></path>
                          <path
                            d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                            className="fill-current group-hover:text-[#800000]"
                          ></path>
                        </svg>
                        <span className="-mr-1 font-medium">
                          All Open Tenders
                        </span>
                      </Link>
                    </li>
                    <li className="min-w-max">
                      <Link
                        to="/saava"
                        className="bg group flex items-center space-x-4 px-4 py-3 text-gray-600 group-hover:text-white  bg-gradient-to-r from-white to-[#800000] "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-300 group-hover:text-[#800000]"
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                            clipRule="evenodd"
                          />
                          <path
                            className="fill-current text-gray-600 group-hover:text-[#800000]"
                            d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                          />
                        </svg>
                        <span className="group-hover:text-white">
                          Saava Eng. Ltd
                        </span>
                      </Link>
                    </li>
                    <li className="min-w-max">
                      <Link
                        to="/intracom"
                        className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600  group-hover:text-white  bg-gradient-to-r from-white to-[#800000] "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-600 group-hover:text-[#800000]"
                            fillRule="evenodd"
                            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                            clipRule="evenodd"
                          />
                          <path
                            className="fill-current text-gray-300 group-hover:text-[#800000]"
                            d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                          />
                        </svg>
                        <span className="group-hover:text-white">
                          Intracom Africa Ltd
                        </span>
                      </Link>
                    </li>
                    <li className="min-w-max">
                      <Link
                        to="/benesse"
                        className="bg group flex items-center space-x-4 px-4 py-3 text-gray-600 group-hover:text-white  bg-gradient-to-r from-white to-[#800000] "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-300 group-hover:text-[#800000]"
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                            clipRule="evenodd"
                          />
                          <path
                            className="fill-current text-gray-600 group-hover:text-[#800000]"
                            d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                          />
                        </svg>
                        <span className="group-hover:text-white">
                          Benesse EA. Ltd
                        </span>
                      </Link>
                    </li>
                    <li className="min-w-max">
                      <Link
                        to="/due"
                        className="group flex items-center space-x-4  px-4 py-3 text-gray-600  group-hover:text-white  bg-gradient-to-r from-white to-[#800000] "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-600 group-hover:text-[#800000]"
                            d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                          />
                          <path
                            className="fill-current text-gray-300 group-hover:text-[#800000]"
                            d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                          />
                        </svg>
                        <span className="group-hover:text-white">
                          Due Tenders
                        </span>
                      </Link>
                    </li>
                    <li className="min-w-max">
                      <Link
                        to="/closed"
                        className="group flex items-center space-x-4  px-4 py-3 text-gray-600  group-hover:text-white  bg-gradient-to-r from-white to-[#800000] "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-600 group-hover:text-[#800000]"
                            d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                          />
                          <path
                            className="fill-current text-gray-300 group-hover:text-[#800000]"
                            d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                          />
                        </svg>
                        <span className="group-hover:text-white">
                          Closed Tenders
                        </span>
                      </Link>
                    </li>
                    <li className="min-w-max">
                      <Link
                        to="/bidded"
                        className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600  group-hover:text-white  bg-gradient-to-r from-white to-[#800000] "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-300 group-hover:text-[#800000]"
                            d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                          />
                          <path
                            className="fill-current text-gray-600 group-hover:text-[#800000]"
                            fillRule="evenodd"
                            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="group-hover:text-white">
                          Already Bidded
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-max mt-2 rounded-md">
                  <button
                    className="group flex items-center space-x-4  px-4 py-2 text-gray-600  group-hover:text-white  bg-gradient-to-r from-white to-[#800000] mb-2"
                    onClick={handleSignOut}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover:fill-[#800000]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className=" group-hover:text-white">Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
