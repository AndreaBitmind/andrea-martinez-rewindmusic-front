import { useLocation } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { HeaderStyled } from "./HeaderStyled";

export const Header = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <HeaderStyled>
      {(pathname === "/login" || "/register") && (
        <img src="img/header_pictures.png" width={490} alt="rewindmusic logo" />
      )}
      <Navigation />
    </HeaderStyled>
  );
};
