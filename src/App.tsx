import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import styledMainTheme from "./styledMainTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={styledMainTheme}>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
