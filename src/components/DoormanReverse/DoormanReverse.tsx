import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface DoormanReverseProps {
  children: JSX.Element;
}

const DoormanReverse = ({ children }: DoormanReverseProps) => {
  const user = useAppSelector((state) => state.users.token);
  const navigate = useNavigate();
  const logged = user === "" ? false : true;

  useEffect(() => {
    if (logged) {
      navigate("/songs");
    }
  }, [logged, navigate]);

  return !logged ? children : <></>;
};

export default DoormanReverse;
