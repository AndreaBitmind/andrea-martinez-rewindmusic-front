import { ThemeProvider } from "styled-components";
import "./App.css";
import { Register } from "./components/Register/Register";
import { RegisterStyle } from "./components/Register/RegisterStyled";
import styledMainTheme from "./styledMainTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={styledMainTheme}>
        <RegisterStyle>
          <Register />
        </RegisterStyle>
      </ThemeProvider>
    </>
  );
}

export default App;
