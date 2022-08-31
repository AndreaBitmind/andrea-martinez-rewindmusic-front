import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a component Button", () => {
  describe("When it receives a 'next' text", () => {
    test("Then it should show a text 'next' inside", () => {
      const expectedButtonText = "Sign up!";

      render(
        <Button
          buttonText="Sign up!"
          className="submit-big"
          type="submit"
        ></Button>
      );

      const resultedButtonText = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(resultedButtonText).toBeInTheDocument();
    });
  });
});
