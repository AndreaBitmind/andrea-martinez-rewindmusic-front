import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
      </NavigationStyled>
    </>
  );
};
