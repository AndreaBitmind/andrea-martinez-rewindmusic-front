import { render, screen } from "@testing-library/react";
import { Register } from "./Register";

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
});
