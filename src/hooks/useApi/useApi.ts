import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import {
  deleteSongActionCreator,
  loadAllSongsActionCreator,
} from "../../store/features/songs/slices/songsSlice";

import { useAppDispatch } from "../../store/hooks";
import { successModal } from "../useUser/useUser";

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
      } = await axios.get(loadSongsUrl, {
        headers: { authorization: `Bearer ${token}` },
      });
      dispatch(loadAllSongsActionCreator(songs));
    } catch (error) {
      errorModal("Oops, something went wrong :(");
    }
  }, [dispatch]);

  const deleteSong = useCallback(
    async (songId: string) => {
      const token = localStorage.getItem("token");
      const deleteSongsUrl = `${apiURL}songs/`;
      try {
        await axios.delete(`${deleteSongsUrl}${songId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(deleteSongActionCreator(songId));
      } catch (error) {
        errorModal("Oops, something went wrong :(");
      }
      successModal("Great! This song has been deleted!");
    },
    [dispatch]
  );

  toast.dismiss();
  return {
    getAllSongs,
    deleteSong,
  };
};

export default useApi;
