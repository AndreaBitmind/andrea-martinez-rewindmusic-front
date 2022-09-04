import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import CardListPage from "./CardListPage";

describe("Given the RegiterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show a list inside", () => {
      render(
        <Wrapper>
          <CardListPage />
        </Wrapper>
      );

      const expectedTitle = screen.getByRole("list");

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
