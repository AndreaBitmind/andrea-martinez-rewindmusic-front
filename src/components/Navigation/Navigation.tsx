import { NavLink, useLocation } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <>
      <NavigationStyled>
        {pathname === "/login" && (
          <NavLink className="navlink" to={"/register"}>
            Register
          </NavLink>
        )}
        {pathname === "/register" && (
          <div className="main-buttons">
            <NavLink className="navlink" to={"/login"}>
              Home
            </NavLink>
            <NavLink className="navlink" to={"/login"}>
              Login
            </NavLink>
          </div>
        )}
        {pathname === "/songs" && (
          <div className="main-buttons">
            <NavLink className="navlink-upload" to={"/login"}>
              Upload song
            </NavLink>
            <NavLink className="navlink" to={"/login"}>
              Logout
            </NavLink>
          </div>
        )}
      </NavigationStyled>
    </>
  );
};
