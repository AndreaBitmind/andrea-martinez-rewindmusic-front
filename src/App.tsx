import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import SongListPage from "./pages/SongListPage/SongListPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundErrorPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import styledMainTheme from "./styledMainTheme";
import { useAppDispatch } from "./store/hooks";
import { useEffect } from "react";
import { loginUsersActionCreator } from "./store/features/users/slices/usersSlice";
import decodeToken from "./utils/decodeToken";
import SongDetailsPage from "./pages/SongDetailsPage/SongDetailsPage";
import SongCreateFormPage from "./pages/SongCreateFormPage/SongCreateFormPage";
import SongModifyFormPage from "./pages/SongModifyFormPage/SongModifyFormPage";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const localUser = decodeToken(token);
      dispatch(loginUsersActionCreator(localUser));
      navigate(pathname);
    } else {
      navigate(pathname);
    }
  }, [dispatch, navigate, pathname]);

  return (
    <>
      <ToastContainer autoClose={5000} />
      <ThemeProvider theme={styledMainTheme}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/songs" element={<SongListPage />} />
          <Route path="/songs/:id" element={<SongDetailsPage />} />
          <Route path="/create-song" element={<SongCreateFormPage />} />
          <Route path="/modify-song/:id" element={<SongModifyFormPage />} />
          <Route path="/*" element={<NotFoundErrorPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
