import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { loadAllSongsActionCreator } from "../../store/features/songs/slices/songsSlice";

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

  const getAllSongs = useCallback(async (): Promise<void> => {
    const token = localStorage.getItem("token");
    const loadSongsUrl = `${apiURL}songs`;

    try {
      loadingModal("Please wait :)");
      const {
        data: { songs },
        status,
      } = await axios.get(loadSongsUrl, {
        headers: { authorization: `Bearer ${token}` },
      });
      if (status === 200) {
        dispatch(loadAllSongsActionCreator(songs));
      }
    } catch (error) {
      errorModal("Oops, something went wrong :(");
    }
  }, [dispatch]);
  return {
    getAllSongs,
  };
};

export default useApi;
