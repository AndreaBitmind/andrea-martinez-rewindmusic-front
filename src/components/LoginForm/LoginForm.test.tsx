import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import { LoginForm } from "./LoginForm";

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
});
