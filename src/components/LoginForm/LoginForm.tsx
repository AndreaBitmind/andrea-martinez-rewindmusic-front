import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Button from "../Button/Button";
import { RegisterStyle } from "../RegisterForm/RegisterStyled";

export const LoginForm = () => {
  return (
    <RegisterStyle>
      <ToastContainer />
      <h2>Sign In</h2>
      <form>
        <input
          type="text"
          id="userName"
          placeholder="Enter your username"
          required
          autoComplete="off"
        />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          autoComplete="off"
        />
        <Button className="submit-big" type="submit" buttonText="Sign in!" />
        <p>Don't have an account? Register now!</p>
        <NavLink to={"/register"}>
          <Button className="submit-big" type="submit" buttonText="Register" />
        </NavLink>
      </form>
    </RegisterStyle>
  );
};
