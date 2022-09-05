import { useLocation } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { HeaderStyled } from "./HeaderStyled";

export const Header = (): JSX.Element => {
  const { pathname } = useLocation();

  const isAutentication = pathname === "/login" || pathname === "/register";

  return (
    <HeaderStyled>
      {isAutentication && (
        <img src="img/header_pictures.png" width={490} alt="rewindmusic logo" />
      )}
      {pathname === "/songs" && (
        <img src="img/logo.png" width={300} alt="rewindmusic logo" />
      )}
      <Navigation />
    </HeaderStyled>
  );
};
