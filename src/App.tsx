import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import SongListPage from "./pages/SongListPage/SongListPage";

import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundErrorPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import styledMainTheme from "./styledMainTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={styledMainTheme}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/songs" element={<SongListPage />} />
          <Route path="/*" element={<NotFoundErrorPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
