import { NavLink } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

interface SongCardProps {
  songName: string;
  band: string;
  image: string;
  instrument: string[];
}

const SongCard = ({
  songName,
  image,
  band,
  instrument,
}: SongCardProps): JSX.Element => {
  return (
    <>
      <img
        width={80}
        height={80}
        className="songcard__image"
        src={image}
        alt={`${band} album cover`}
      />
      <ul className="songcard__data">
        <li className="data__songName">{songName}</li>
        <li className="data__band">{band}</li>
      </ul>
      <span>{instrument}</span>
      <NavLink className="navlink-edit" to={"/login"}>
        Edit
      </NavLink>
      <div className="icon">
        <FaRegTrashAlt className="icon--trash" />
      </div>
    </>
  );
};

export default SongCard;
