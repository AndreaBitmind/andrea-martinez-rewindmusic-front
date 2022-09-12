import { NavLink } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { SongCardStyled } from "./SongCardStyled";
import useApi from "../../hooks/useApi/useApi";

interface SongCardProps {
  songName: string;
  band: string;
  image: string;
  firstInstrument: string;
  secondInstrument: string;
  id: string;
  imageBackUp: string;
}

const SongCard = ({
  songName,
  image,
  band,
  firstInstrument,
  secondInstrument,
  id,
  imageBackUp,
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
        src={imageBackUp}
        alt={`${band} album cover`}
      />
      <div className="songCard__data">
        <ul className="songcard__data__item">
          <li className="data--big">{songName}</li>
          <li className="data--small">{band}</li>
        </ul>
        <div className="songcard__bottom">
          <span className="instrument">{firstInstrument}</span>
          <span className="instrument">{secondInstrument}</span>
        </div>
      </div>
      <div className="songCard__functionality">
        <FaRegTrashAlt
          className="icon--trash"
          data-testid="icon-trash"
          onClick={handleDelete}
        />
        <NavLink className="navlink-more" to={`/songs/${id}`}>
          More
        </NavLink>
      </div>
    </SongCardStyled>
  );
};

export default SongCard;
