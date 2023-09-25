import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between lg:flex-row  lg:justify-between">
    <div>
        <Logo></Logo>
    </div>
      <nav>
        <ul className="flex gap-6 mt-5 md:mt-0 lg:mt-0">

        <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-orange-600 font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-orange-600 font-bold" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-orange-600 font-bold" : ""
              }
            >
              Statstics
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
