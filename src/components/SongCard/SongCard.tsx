import { NavLink } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { SongCardStyled } from "./SongCardStyled";
import useApi from "../../hooks/useApi/useApi";

interface SongCardProps {
  songName: string;
  band: string;
  image: string;
  instrument: string[];
  id: string;
}

const SongCard = ({
  songName,
  image,
  band,
  instrument,
  id,
}: SongCardProps): JSX.Element => {
  const { deleteSong } = useApi();

  const handleDelete = () => {
    deleteSong(id);
  };

  return (
    <SongCardStyled>
      <img
        width={100}
        height={100}
        className="songcard__image"
        src={image}
        alt={`${band} album cover`}
      />
      <div className="songCard__data">
        <ul className="songcard__data__item">
          <li className="data--big">{songName}</li>
          <li className="data--small">{band}</li>
        </ul>
        <div className="songcard__bottom">
          <span className="instrument">{instrument[2]}</span>
          <span className="instrument">{instrument[0]}</span>
        </div>
      </div>
      <div className="songCard__functionality">
        <FaRegTrashAlt className="icon--trash" onClick={handleDelete} />
        <NavLink className="navlink-edit" to={"/login"}>
          Edit
        </NavLink>
      </div>
    </SongCardStyled>
  );
};

export default SongCard;
