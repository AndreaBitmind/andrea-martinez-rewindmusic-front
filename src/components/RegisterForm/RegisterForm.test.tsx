import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Wrapper from "../../utils/Wrapper";
import { RegisterForm } from "./RegisterForm";

const mockUser = jest.fn();
const mockNavigate = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  register: mockUser,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, two inputs and a button", () => {
      render(
        <Wrapper>
          <RegisterForm />
        </Wrapper>
      );

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
      render(
        <Wrapper>
          <RegisterForm />
        </Wrapper>
      );

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
      render(
        <Wrapper>
          <RegisterForm />
        </Wrapper>
      );

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

    test("Then the navigate function will be called", async () => {
      mockUser.mockResolvedValue(true);
      const name = "andrea";
      const password = "12345";
      render(
        <Wrapper>
          <RegisterForm />
        </Wrapper>
      );

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

      await waitFor(() => expect(mockNavigate).toHaveBeenCalled());
    });
  });

  describe("When the registration fails", () => {
    test("Then there isn't going to be a navigate call", async () => {
      mockUser.mockResolvedValue(false);
      const name = "andrea";
      const password = "12345";
      render(
        <Wrapper>
          <RegisterForm />
        </Wrapper>
      );

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

      await waitFor(() => expect(mockNavigate).not.toHaveBeenCalled());
    });
  });
});
