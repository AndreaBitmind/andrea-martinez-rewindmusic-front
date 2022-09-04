import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import NotFoundErrorPage from "./NotFoundPage";

describe("Given the RegiterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show a text 'OOOPS! 404 PAGE NOT FOUND'", () => {
      render(
        <Wrapper>
          <NotFoundErrorPage />
        </Wrapper>
      );

      const expectedTitle = screen.getByText("OOOPS! 404 PAGE NOT FOUND");

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
