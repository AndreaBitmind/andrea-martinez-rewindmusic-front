import { SyntheticEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import { FormStyle } from "../RegisterForm/FormStyled";

export const LoginForm = () => {
  const initialState = {
    userName: "",
    password: "",
  };

  const { login } = useUser();

  const [formData, setFormData] = useState(initialState);

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();
    await login({
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
    <FormStyle>
      <ToastContainer />
      <h2>Sign In</h2>
      <form onSubmit={onSubmitData}>
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
        <span>
          Don't have an account?{" "}
          <NavLink className="register-link" to={"/register"}>
            Register now here!
          </NavLink>
        </span>
      </form>
    </FormStyle>
  );
};
