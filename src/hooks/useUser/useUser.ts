import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ProtoUser,
  RegisteredUse,
  UserToken,
} from "../../interfaces/users/User";
import {
  loginUsersActionCreator,
  logOutActionCreator,
} from "../../store/features/users/slices/usersSlice";
import { useAppDispatch } from "../../store/hooks";
import decodeToken from "../../utils/decodeToken";

export const apiURL = process.env.REACT_APP_API_URL;

export const successModal = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

const useUser = () => {
  const dispatch = useAppDispatch();
  const register = async (UnregisteredUser: ProtoUser) => {
    try {
      await axios.post(`${apiURL}users/register`, UnregisteredUser);

      successModal("Successfully signed up!");
      return true;
    } catch (error) {
      errorModal("Error, something went wrong");
      return false;
    }
  };

  const logOut = () => {
    dispatch<PayloadAction>(logOutActionCreator());
    localStorage.removeItem("token");
  };

  const navigate = useNavigate();

  const login = async (userData: ProtoUser) => {
    try {
      const {
        data: {
          user: { token },
        },
      }: AxiosResponse<UserToken> = await axios.post(
        `${apiURL}users/login`,
        userData
      );

      const userInfo: RegisteredUse = decodeToken(token);
      localStorage.setItem("token", token);
      dispatch(loginUsersActionCreator(userInfo));
      navigate("/songs");
      return;
    } catch (error: any) {
      errorModal("Oops! Something went wrong, try again...");
      return error.message;
    }
  };
  toast.dismiss();
  return { register, login, logOut };
};
export default useUser;
