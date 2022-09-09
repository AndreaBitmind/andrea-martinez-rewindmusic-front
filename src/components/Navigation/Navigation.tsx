import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";

import Button from "../Button/Button";
import { NavigationStyled } from "./NavigationStyled";

export const Navigation = () => {
  const { pathname } = useLocation();
  const { logOut } = useUser();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <>
      <NavigationStyled>
        {pathname === "/register" && (
          <div className="main-buttons">
            <Button
              actionOnClick={handleLogIn}
              className="autentication"
              type="submit"
              buttonText="Log In"
            />
          </div>
        )}
        {pathname === "/songs" && (
          <div className="main-buttons">
            <NavLink className="navlink-upload" to={"/songForm"}>
              Upload song
            </NavLink>
            <Button
              actionOnClick={handleLogOut}
              className="autentication"
              type="submit"
              buttonText="LogOut"
            />
          </div>
        )}
      </NavigationStyled>
    </>
  );
};
