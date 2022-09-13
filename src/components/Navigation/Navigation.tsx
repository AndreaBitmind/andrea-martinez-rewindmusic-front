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

  const songForm = pathname === "/create-song" || pathname === "/modify-song";

  return (
    <>
      <NavigationStyled>
        {pathname === "/register" && (
          <div className="main-buttons">
            <Button
              actionOnClick={handleLogIn}
              className="autentication"
              type="submit"
              buttonText="LogIn"
            />
          </div>
        )}
        {pathname === "/songs" && (
          <div className="song-buttons">
            <NavLink className="navlink-upload" to={"/create-song"}>
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
        {songForm && (
          <div className="main-buttons">
            <NavLink className="navlink-back" to={"/songs"}>
              Back
            </NavLink>
          </div>
        )}
      </NavigationStyled>
    </>
  );
};
