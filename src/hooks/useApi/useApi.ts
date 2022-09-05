import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { loadAllSongsActionCreator } from "../../store/features/songs/slices/songsSlice";
import { logOutActionCreator } from "../../store/features/users/slices/usersSlice";

import { useAppDispatch } from "../../store/hooks";

const apiURL = process.env.REACT_APP_API_URL;

export const loadingModal = (loading: string) =>
  toast.loading(loading, {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

const useApi = () => {
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch<PayloadAction>(logOutActionCreator());
    localStorage.removeItem("token");
  };

  const getAllSongs = useCallback(async (): Promise<void> => {
    const token = localStorage.getItem("token");
    const loadSongsUrl = `${apiURL}songs`;

    try {
      loadingModal("Please wait :)");
      const {
        data: { songs },
      } = await axios.get(loadSongsUrl, {
        headers: { authorization: `Bearer ${token}` },
      });
      dispatch(loadAllSongsActionCreator(songs));
    } catch (error) {
      errorModal("Oops, something went wrong :(");
    }
  }, [dispatch]);
  toast.dismiss();
  return {
    getAllSongs,
    logOut,
  };
};

export default useApi;
