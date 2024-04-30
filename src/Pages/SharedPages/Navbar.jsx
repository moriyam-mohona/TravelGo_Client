import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        if (user) {
          navigate(location?.state || "/login");
        }
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <div className="p-3 md:px-12 my-7 mb-14 ">
      <div className="navbar bg-[#008EC4] rounded-full md:px-7 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white "
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
              className="menu menu-sm dropdown-content bg-blue-50 mt-3 z-50  shadow rounded-box w-44"
            >
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#008EC4 " : "",
                    color: isActive ? "white" : "black",
                    borderRadius: "9999px",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addTouristsSpot"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#008EC4 " : "",
                    color: isActive ? "white" : "black",
                    borderRadius: "9999px",
                  })}
                >
                  Add Tourists Spot
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allTouristsSpot"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#008EC4 " : "",
                    color: isActive ? "white" : "black",
                    borderRadius: "9999px",
                  })}
                >
                  All Tourist Spot
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myList"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#008EC4 " : "",
                    color: isActive ? "white" : "black",
                    borderRadius: "9999px",
                  })}
                >
                  My List
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="sm:text-2xl md:text-3xl font-medium text-white">
            TravelGo
          </a>
        </div>
        <div className="navbar-center hidden lg:flex gap-5">
          <ul className="menu menu-horizontal bg-blue-100 px-5 py-2 rounded-full ">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#008EC4 " : "",
                  color: isActive ? "white" : "black",
                  borderRadius: "9999px",
                })}
                className="text-md mr-3"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addTouristsSpot"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#008EC4 " : "",
                  color: isActive ? "white" : "black",
                  borderRadius: "9999px",
                })}
                className="text-md"
              >
                Add Tourists Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allTouristsSpot"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#008EC4 " : "",
                  color: isActive ? "white" : "black",
                  borderRadius: "9999px",
                })}
                className="text-md mr-3"
              >
                All Tourist Spot
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/myList"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#008EC4 " : "",
                  color: isActive ? "white" : "black",
                  borderRadius: "9999px",
                })}
                className="text-md"
              >
                My List
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end items-center ">
          {user ? (
            <div className="flex items-center gap-5">
              <button
                onClick={handleLogout}
                className="bg-[#008EC4] text-white text-md"
              >
                Log Out
              </button>

              <div
                tabIndex={0}
                role="button"
                className="btn  btn-ghost btn-circle avatar  "
                data-tooltip-id="my-tooltip-1"
                style={{ backgroundColor: "#999" }}
              >
                <img
                  alt=""
                  className="w-10 rounded-full"
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/mXVJ4Qq/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTAx-L3-Jt-Nj-A5-LXNvb-Glka-WNvbi13-LTAw-Mi1w-Ln-Bu.webp"
                  }
                />
              </div>
              <ReactTooltip
                id="my-tooltip-1"
                place="top"
                content={user.displayName}
              />
            </div>
          ) : (
            <>
              <Link to="/register">
                <button className="  px-2 md:py-2 rounded-full text-md font-medium text-white">
                  Register
                </button>{" "}
              </Link>
              <Link to="/login">
                <button className="  px-2 md:py-2 rounded-full text-md font-medium text-white">
                  LogIn
                </button>{" "}
              </Link>
            </>
          )}
        </div>
        {/* <div>
          <label className="swap swap-rotate">
            
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

 
            <svg
              className="swap-off fill-current w-8 h-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on fill-current w-8 h-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
