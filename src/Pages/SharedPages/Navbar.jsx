import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

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
                  to="/allTouristSpot"
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
                to="/ allTouristSpot"
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
                className="btn tooltip btn-ghost btn-circle avatar  "
                data-tip={user.displayName}
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
      </div>
    </div>
  );
};

export default Navbar;
