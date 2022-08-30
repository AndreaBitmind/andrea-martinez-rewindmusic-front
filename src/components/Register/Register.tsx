import Button from "../Button/Button";
import { RegisterStyle } from "./RegisterStyled";

export const Register = () => {
  return (
    <RegisterStyle>
      <h2>Create an account</h2>
      <form>
        <input
          type="text"
          placeholder="Enter your username"
          required
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          autoComplete="off"
        />
        <Button buttonText="Sign up!" />
      </form>
    </RegisterStyle>
  );
};
