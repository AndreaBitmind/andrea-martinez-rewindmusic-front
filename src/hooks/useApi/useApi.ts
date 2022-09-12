import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createNewSongActionCreator,
  deleteSongActionCreator,
  loadAllSongsActionCreator,
  modifySongActionCreator,
} from "../../store/features/songs/slices/songsSlice";

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

export const successModal = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
  });

const useApi = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      const getSongsUrl = `${apiURL}songs/`;
      try {
        await axios.delete(`${getSongsUrl}${songId}`, {
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

  const getOneSongById = useCallback(
    async (songId: string) => {
      const token = localStorage.getItem("token");
      const getSongsUrl = `${apiURL}songs/`;
      try {
        const {
          data: { song },
        } = await axios.get(`${getSongsUrl}${songId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return song;
      } catch (error) {
        errorModal("Cannot show details from this song");
        navigate("/notfounderror");
      }
    },
    [navigate]
  );

  const createSong = useCallback(
    async (formSongData: FormData) => {
      const token = localStorage.getItem("token");
      try {
        const {
          data: { songCreated },
        } = await axios.post(`${apiURL}songs/`, formSongData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        successModal("Your songs has been correctly uploaded!");
        dispatch(createNewSongActionCreator(songCreated));
        return songCreated;
      } catch (error) {
        errorModal("Cannot create the song :(");
      }
    },
    [dispatch]
  );

  const modifySong = useCallback(
    async (song: FormData, id: string) => {
      const token = localStorage.getItem("token");
      const modifyURL = `${apiURL}songs/`;

      try {
        const {
          data: { modifiedSong },
        } = await axios.put(`${modifyURL}${id}`, song, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(modifySongActionCreator(modifiedSong));
        successModal("Song modified successfully!");
      } catch (error) {
        errorModal("Cannot modify the song :(");
      }
    },
    [dispatch]
  );

  toast.dismiss();
  return {
    getAllSongs,
    deleteSong,
    getOneSongById,
    createSong,
    modifySong,
  };
};

export default useApi;
