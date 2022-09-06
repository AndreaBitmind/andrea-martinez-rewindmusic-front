import { NavLink } from "react-router-dom";
import { PageNotFoundStyled } from "./PageNotFoundStyled";

const PageNotFound = (): JSX.Element => {
  return (
    <PageNotFoundStyled>
      <h1>
        <img src="img/logo.png" width={300} alt="rewindmusic logo" />
      </h1>
      <NavLink className="navlink-home" to={"/login"}>
        Home
      </NavLink>
      <p>
        OOOPS! <br />
        404 <br />
        PAGE NOT FOUND
      </p>
      <img src="img/disconnect.png" width={410} alt="page not found" />
    </PageNotFoundStyled>
  );
};

export default PageNotFound;
