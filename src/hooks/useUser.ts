import axios, { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useAppDispatch } from "../app/hooks";
import { loginUsersActionCreator } from "../app/store/features/users/slices/usersSlice";

import { ProtoUser, RegisteredUse, UserToken } from "../interfaces/users/User";

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
    } catch (error) {
      errorModal("Error, something went wrong");
    }
  };

  const login = async (userData: ProtoUser) => {
    try {
      const {
        data: { token },
      }: AxiosResponse<UserToken> = await axios.post(
        `${apiURL}users/login`,
        userData
      );

      if (token) {
        localStorage.setItem("token", token);

        const userInfo: RegisteredUse = jwtDecode(token);
        dispatch(loginUsersActionCreator(userInfo));
      }
    } catch (error: any) {
      errorModal("Oops! Something went wrong, try again...");
      return error.message;
    }
  };

  return { register, login };
};
export default useUser;
