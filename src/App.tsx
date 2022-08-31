import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { Register } from "./components/Register/Register";
import styledMainTheme from "./styledMainTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={styledMainTheme}>
        <ToastContainer />
        <Register />
      </ThemeProvider>
    </>
  );
}

export default App;
