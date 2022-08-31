import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Register } from "./Register";

const mockUser = jest.fn();

jest.mock("../../hooks/useUser", () => () => ({
  register: mockUser,
}));

describe("Given a form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, two inputs and a button", () => {
      render(<Register />);

      const elements = [
        screen.getByText("Create an account"),
        screen.getByPlaceholderText("Enter your username"),
        screen.getByPlaceholderText("Enter your password"),
        screen.getByRole("button"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When a user fills all inputs", () => {
    test("Then every input should have what the users filled inside", async () => {
      const name = "andrea";
      const password = "12345";
      render(<Register />);

      const userNameInput = screen.getByPlaceholderText(
        "Enter your username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByPlaceholderText(
        "Enter your password"
      ) as HTMLInputElement;

      await userEvent.type(userNameInput, name);
      await userEvent.type(passwordInput, password);

      expect(userNameInput).toHaveValue(name);
      expect(passwordInput).toHaveValue(password);
    });
  });

  describe("When a user fills the inputs and click the button", () => {
    test("Then the register function will be called", async () => {
      const name = "andrea";
      const password = "12345";
      render(<Register />);

      const userNameInput = screen.getByPlaceholderText(
        "Enter your username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByPlaceholderText(
        "Enter your password"
      ) as HTMLInputElement;

      const submitButton = screen.getByRole("button");

      await userEvent.type(userNameInput, name);
      await userEvent.type(passwordInput, password);
      await userEvent.click(submitButton);

      expect(mockUser).toHaveBeenCalled();
    });
  });
});
