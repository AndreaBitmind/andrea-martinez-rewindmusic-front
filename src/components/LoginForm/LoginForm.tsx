import { SyntheticEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import { RegisterStyle } from "../RegisterForm/RegisterStyled";

export const LoginForm = () => {
  const initialState = {
    userName: "",
    password: "",
  };

  const { login } = useUser();
  const [formData, setFormData] = useState(initialState);

  const onSubmitData = (event: SyntheticEvent) => {
    event.preventDefault();
    login({
      userName: formData.userName,
      password: formData.password,
    });
  };

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const hasEmptyFields =
    formData.userName.length < 4 || formData.password.length < 4;

  return (
    <RegisterStyle onSubmit={onSubmitData}>
      <ToastContainer />
      <h2>Sign In</h2>
      <form>
        <input
          type="text"
          id="userName"
          placeholder="Enter your username"
          required
          autoComplete="off"
          value={formData.userName}
          onChange={onChangeData}
        />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          autoComplete="off"
          value={formData.password}
          onChange={onChangeData}
        />
        <Button
          className="submit-big"
          type="submit"
          buttonText="Sign in!"
          isDisabled={hasEmptyFields}
          actionOnClick={() => {}}
        />
        <p>Don't have an account? Register now!</p>
        <NavLink to={"/register"}>
          <Button className="submit-big" type="submit" buttonText="Register" />
        </NavLink>
      </form>
    </RegisterStyle>
  );
};
