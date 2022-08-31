import axios from "axios";
import { toast } from "react-toastify";
import { UnregisteredUser } from "../interfaces/users/User";

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
  const register = async (UnregisteredUser: UnregisteredUser) => {
    try {
      await axios.post(`${apiURL}users/register`, UnregisteredUser);

      successModal("Successfully signed up!");
    } catch (error) {
      errorModal("Error, this user already exists");
    }
  };

  return { register };
};
export default useUser;
