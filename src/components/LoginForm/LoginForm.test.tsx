import { fireEvent, render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import { LoginForm } from "./LoginForm";

let mockLogin = { login: jest.fn() };
jest.mock("../../hooks/useUser/useUser", () => () => mockLogin);

describe("Given a Loginform component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, two inputs and a button", () => {
      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );

      const elements = [
        screen.getByText("Sign In"),
        screen.getByPlaceholderText("Enter your username"),
        screen.getByPlaceholderText("Enter your password"),
        screen.getByText("Register"),
        screen.getByText("Don't have an account? Register now!"),
        screen.getByRole("link"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When instantiated and the user writes in", () => {
    test("Then it should render a username with 'rodrigo' text and password inputs with the text '098765'", () => {
      const usernameFake = "rodrigo";
      const passwordFake = "098765";

      render(<LoginForm />, { wrapper: Wrapper });

      const formInputs = {
        userName: screen.getByPlaceholderText(
          "Enter your username"
        ) as HTMLInputElement,
        password: screen.getByPlaceholderText(
          "Enter your password"
        ) as HTMLInputElement,
      };

      fireEvent.change(formInputs.userName, {
        target: { value: usernameFake },
      });
      fireEvent.change(formInputs.password, {
        target: { value: passwordFake },
      });

      expect(formInputs.userName.value).toBe(usernameFake);
      expect(formInputs.password.value).toBe(passwordFake);
    });

    test("Then it should call the mockLogin with the data user", async () => {
      const usernameFake = "rodrigo";
      const passwordFake = "098765";

      render(<LoginForm />, { wrapper: Wrapper });

      const form = {
        userName: screen.getByPlaceholderText(
          "Enter your username"
        ) as HTMLInputElement,
        password: screen.getByPlaceholderText(
          "Enter your password"
        ) as HTMLInputElement,
      };

      fireEvent.change(form.userName, { target: { value: usernameFake } });
      fireEvent.change(form.password, { target: { value: passwordFake } });

      const submit = screen.getByRole("button", { name: "Sign in!" });
      await fireEvent.click(submit);
      const loginData = {
        userName: usernameFake,
        password: passwordFake,
      };

      expect(mockLogin.login).toHaveBeenCalledWith(loginData);
    });
  });
});
