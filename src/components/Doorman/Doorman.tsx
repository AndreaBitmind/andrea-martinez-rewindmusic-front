import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface DoormanProps {
  children: JSX.Element | JSX.Element[];
}

const Doorman = ({ children }: DoormanProps): JSX.Element => {
  const hasToken = useAppSelector((state) => state.users.token);
  return hasToken ? <>{children}</> : <Navigate to="/login" />;
};
export default Doorman;
