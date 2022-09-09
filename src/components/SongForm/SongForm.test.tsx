import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import SongForm from "./SongForm";

describe("Given a form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, two inputs and a button", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SongForm />
          </BrowserRouter>
        </Provider>
      );

      const elements = [
        screen.getByText("UPLOAD YOUR SONG"),
        screen.getByPlaceholderText("Song name"),
        screen.getByPlaceholderText("Album"),
        screen.getByPlaceholderText("Year"),
        screen.getByPlaceholderText("Band"),
        screen.getByTestId("select-option1"),
        screen.getByTestId("select-option2"),
        screen.getByRole("button"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
