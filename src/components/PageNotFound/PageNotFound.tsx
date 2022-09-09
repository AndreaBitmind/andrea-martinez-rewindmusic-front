import { NavLink } from "react-router-dom";
import { PageNotFoundStyled } from "./PageNotFoundStyled";

const PageNotFound = (): JSX.Element => {
  return (
    <PageNotFoundStyled>
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
