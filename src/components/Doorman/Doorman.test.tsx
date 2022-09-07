import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import SongList from "../SongList/SongList";
import Doorman from "./Doorman";

let mockUnloggedUser: string;

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockUnloggedUser,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a CredentialsValidation component", () => {
  beforeEach(() => jest.clearAllMocks());
  describe("When its invoked and the user is not logged in", () => {
    test("Then it should call the navigate function", () => {
      mockUnloggedUser = "";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Doorman>
              <SongList />
            </Doorman>
          </BrowserRouter>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
  describe("When its invoked and the user is  logged in", () => {
    test("Then it should call the navigate function", () => {
      mockUnloggedUser = "1234";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Doorman>
              <SongList />
            </Doorman>
          </BrowserRouter>
        </Provider>
      );

      const listExpected = screen.getByRole("list");

      expect(listExpected).toBeInTheDocument();
    });
  });
});
