import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import SongCreateFormPage from "./SongCreateFormPage";

const mockUseParams = jest.fn();
const mockUseAppSelector = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockUseParams(),
}));

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockUseAppSelector(),
}));

describe("Given a SongCreateFormPage component", () => {
  describe("When not receives an id", () => {
    test("Then it should rendered the create component", () => {
      mockUseParams.mockReturnValue({ id: undefined });
      mockUseAppSelector.mockReturnValue([]);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <SongCreateFormPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedText = screen.getByText("UPLOAD YOUR SONG");

      expect(expectedText).toBeInTheDocument();
    });
  });
});
