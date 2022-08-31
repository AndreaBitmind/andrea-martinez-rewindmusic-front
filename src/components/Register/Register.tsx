import { SyntheticEvent, useState } from "react";
import useUser from "../../hooks/useUser";
import Button from "../Button/Button";
import { RegisterStyle } from "./RegisterStyled";

export const Register = () => {
  const { register } = useUser();

  const initialState = {
    userName: "",
    password: "",
  };

  const [registerData, setRegisterData] = useState(initialState);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    register(registerData);
    setRegisterData(initialState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.id]: event.target.value,
    });
  };

  const hasEmptyFields =
    registerData.userName.length < 4 || registerData.password.length < 4;

  return (
    <RegisterStyle onSubmit={handleSubmit}>
      <h2>Create an account</h2>
      <form>
        <input
          type="text"
          id="userName"
          placeholder="Enter your username"
          required
          autoComplete="off"
          value={registerData.userName}
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          autoComplete="off"
          value={registerData.password}
          onChange={handleChange}
        />
        <Button
          actionOnClick={() => {}}
          className="submit-big"
          type="submit"
          buttonText="Sign up!"
          isDisabled={hasEmptyFields}
        />
      </form>
    </RegisterStyle>
  );
};
